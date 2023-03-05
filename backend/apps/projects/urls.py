from django.urls import path

from apps.projects.views import (ProjectsListAPIView, ProjectListCreateAPIView, UsersToApproveListAPIView,
                                 ProjectUpdateAPIView, UserJoinProjectAPIView, ApproveUserAPIView)


urlpatterns = [
    path('', ProjectsListAPIView.as_view(), name='projects'),
    path('create/', ProjectListCreateAPIView.as_view(), name='create_project'),
    path('update/<int:project_id>/', ProjectUpdateAPIView.as_view(), name='update_project'),
    path('join/<int:project_id>/',  UserJoinProjectAPIView.as_view(), name='join_project'),
    path('users/approve/<int:project_id>/', UsersToApproveListAPIView.as_view()),
    path('approve/<int:project_id>/<int:user_id>/', ApproveUserAPIView.as_view()),
]
