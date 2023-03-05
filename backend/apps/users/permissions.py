from rest_framework.permissions import BasePermission

from apps.users.models import CustomUserResume


class UserCandidatePermission(BasePermission):

    def has_permission(self, request, view):
        return request.user.has_role(role='Candidate')


class UserRecruiterPermission(BasePermission):

    def has_permission(self, request, view):
        return request.user.has_role(role='Recruiter')


class UserSummaryPermission(BasePermission):

    def has_permission(self, request, view):
        resume = CustomUserResume.objects.filter(user=request.user).first()
        if request.user.is_authenticated:
            return True if resume else False
        return False


class UserCreateSummaryPermission(BasePermission):

    def has_permission(self, request, view):
        resume = CustomUserResume.objects.filter(user=request.user).first()
        if request.user.is_authenticated:
            return False if resume else True
        return False
