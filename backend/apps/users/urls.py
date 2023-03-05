from django.urls import path

from apps.users.views import (UserSummaryCreateAPIView, UserSummaryUpdateAPIView,
                              UserSummaryListAPIView, CandidateListAPIView)

urlpatterns = [
    path('', CandidateListAPIView.as_view(), name="users"),
    path('summary/', UserSummaryCreateAPIView.as_view(), name="user_summary_create"),
    path('summary/<int:user_id>/', UserSummaryListAPIView.as_view(), name="user_summary"),
    path("summary/update/", UserSummaryUpdateAPIView.as_view(), name="user_summary"),
]
