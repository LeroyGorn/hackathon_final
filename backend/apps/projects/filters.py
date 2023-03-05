from django_filters import rest_framework as filters

from apps.projects.models import Project


class ProjectsFilter(filters.FilterSet):
    stack = filters.CharFilter(field_name='tech_stack', method='stack_filter')
    name = filters.CharFilter(field_name='name', lookup_expr='icontains')

    def stack_filter(self, qs, name, value):
        return qs.filter(project_stack__stack_item__in=value.split(","))

    class Meta:
        model = Project
        fields = ['name', 'project_stack']
