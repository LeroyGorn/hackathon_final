from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated

from apps.projects.models import Project
from apps.projects.serializers import ProjectSerializer, ProjectCreateUpdateSerializer
from apps.projects.filters import ProjectsFilter
from apps.projects.permissions import UserProjectPermission
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.auth_user.models import CustomUser
from apps.users.models import CustomUserResume
from apps.users.serializers import CandidateResumeSerializer


class ProjectsListAPIView(generics.ListAPIView):
    permission_classes = (
        IsAuthenticated,
    )
    serializer_class = ProjectSerializer
    pagination_class = LimitOffsetPagination
    filterset_class = ProjectsFilter

    def get_queryset(self):
        return Project.objects.filter(
            is_active=True,
            is_open=True
        )


class ProjectListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = (
        IsAuthenticated,
    )
    serializer_class = ProjectCreateUpdateSerializer


class ProjectUpdateAPIView(generics.UpdateAPIView):
    permission_classes = (
        UserProjectPermission,
    )
    serializer_class = ProjectCreateUpdateSerializer

    def get_object(self, *args, **kwargs):
        return get_object_or_404(Project, id=self.kwargs.get('project_id'))


class UserJoinProjectAPIView(APIView):
    permission_classes = (
        IsAuthenticated,
    )

    def get(self, request, *args, **kwargs):
        project = get_object_or_404(Project, id=self.kwargs.get('project_id'))
        user = request.user
        project.wait_members.add(user)
        project.save()
        return Response(status=status.HTTP_200_OK)


class UsersToApproveListAPIView(generics.ListAPIView):
    permission_classes = (
        UserProjectPermission,
    )
    serializer_class = CandidateResumeSerializer

    def get_queryset(self):
        return CustomUserResume.objects.filter(
                user__projects_await=self.kwargs.get('project_id')
            )


class ApproveUserAPIView(APIView):
    permission_classes = (
        IsAuthenticated,
    )

    def get(self, request, *args, **kwargs):
        project = get_object_or_404(Project, id=self.kwargs.get('project_id'))
        user = get_object_or_404(CustomUser, id=self.kwargs.get('user_id'))
        project.wait_members.remove(user)
        project.members.add(user)
        project.save()
        return Response(status=status.HTTP_200_OK)
