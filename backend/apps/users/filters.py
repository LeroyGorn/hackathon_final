from django_filters import rest_framework as filters

from apps.users.models import CustomUserResume


class UserResumeFilter(filters.FilterSet):
    stack = filters.CharFilter(field_name='tech_stack', method='stack_filter')
    years = filters.NumberFilter(field_name='years_experience')

    def stack_filter(self, qs, name, value):
        return qs.filter(tech_stack__stack_item__in=value.split(","))

    class Meta:
        model = CustomUserResume
        fields = ['years_experience', 'tech_stack']
