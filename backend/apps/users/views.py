from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated

from apps.users.serializers import (RecruiterSummarySerializer, CandidateSummarySerializer,
                                    CandidateUserSerializer, CandidateResumeSerializer)

from apps.users.models import CustomUserResume, ResumeStack
from apps.users.permissions import UserSummaryPermission, UserCreateSummaryPermission

from apps.users.filters import UserResumeFilter
from rest_framework.response import Response


class UserSummaryCreateAPIView(generics.CreateAPIView):
    permission_classes = (
        UserCreateSummaryPermission,
    )

    def get_serializer_class(self):
        if self.request.user.has_role(role='Recruiter'):
            return RecruiterSummarySerializer
        return CandidateSummarySerializer


class UserSummaryListAPIView(generics.ListAPIView):
    permission_classes = (
        IsAuthenticated,
    )
    serializer_class = CandidateSummarySerializer

    def get(self, request, *args, **kwargs):
        resume = get_object_or_404(CustomUserResume, user_id=self.kwargs.get('user_id'))
        return Response({'summary': CandidateSummarySerializer(resume).data})


class UserSummaryUpdateAPIView(generics.UpdateAPIView):
    permission_classes = (
        UserSummaryPermission,
    )

    def get_object(self, *args, **kwargs):
        return get_object_or_404(CustomUserResume, user=self.request.user)

    def get_serializer_class(self):
        if self.request.user.has_role(role='Recruiter'):
            return RecruiterSummarySerializer
        return CandidateSummarySerializer


class CandidateListAPIView(generics.ListAPIView):
    permission_classes = (
        IsAuthenticated,
    )
    serializer_class = CandidateResumeSerializer
    pagination_class = LimitOffsetPagination
    filterset_class = UserResumeFilter

    def get_queryset(self):
        return CustomUserResume.objects.filter(
            is_public=True,
            user__role='Candidate'
        ).distinct()
