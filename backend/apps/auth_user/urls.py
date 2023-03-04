from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from apps.auth_user.views import (UserCreateView, UserLoginView, UserLogoutView,
                                  UserSummaryCreateAPIView, UserSummaryUpdateAPIView)

urlpatterns = [
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path('register/', UserCreateView.as_view()),
    path('login/', UserLoginView.as_view(), name="user_login"),
    path('logout/', UserLogoutView.as_view(), name="user_logout"),
    path('summary/', UserSummaryCreateAPIView.as_view(), name="user_summary"),
    path("summary/update/", UserSummaryUpdateAPIView.as_view(), name="user_summary"),
]
