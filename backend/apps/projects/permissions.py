from rest_framework.permissions import BasePermission

from apps.projects.models import Project


class UserProjectPermission(BasePermission):

    def has_permission(self, request, view):
        project = Project.objects.get(id=view.kwargs.get('project_id'))
        return project.founder == request.user
