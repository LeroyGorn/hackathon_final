from rest_framework.permissions import BasePermission


class UserCandidatePermission(BasePermission):

    def has_permission(self, request, view):
        return request.user.has_role(role='Candidate')


class UserRecruiterPermission(BasePermission):

    def has_permission(self, request, view):
        return request.user.has_role(role='Recruiter')


class UserSummaryPermission(BasePermission):

    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return True if request.user.user_resume else False
        return False
