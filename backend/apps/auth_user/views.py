from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from apps.auth_user.serializers import (UserSerializer, CustomObtainTokenSerializer,
                                        RecruiterSummarySerializer, CandidateSummarySerializer)
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from apps.auth_user.models import CustomUserResume

from apps.auth_user.permissions import UserSummaryPermission


class UserCreateView(generics.CreateAPIView):
    permission_classes = (
        AllowAny,
    )
    serializer_class = UserSerializer


class UserLoginView(TokenObtainPairView):
    permission_classes = (
        AllowAny,
    )
    serializer_class = CustomObtainTokenSerializer


class UserLogoutView(APIView):
    permission_classes = (
        IsAuthenticated,
    )

    def post(self, request):
        try:
            refresh_token = request.data['refresh']
            refresh_token = RefreshToken(refresh_token)
            refresh_token.blacklist()
            return Response("Successful Logout", status=status.HTTP_205_RESET_CONTENT)
        except Exception as exc:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserSummaryCreateAPIView(generics.CreateAPIView):
    permission_classes = (
        IsAuthenticated,
    )

    def get_serializer_class(self):
        if self.request.user.has_role(role='Recruiter'):
            return RecruiterSummarySerializer
        return CandidateSummarySerializer


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
