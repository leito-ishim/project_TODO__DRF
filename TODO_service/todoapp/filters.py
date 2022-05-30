from django_filters import rest_framework as filters
from .models import Project, TODO


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']


class TODOFilter(filters.FilterSet):
    create_timestamp = filters.DateFilter('create_timestamp', lookup_expr='exact')

    class Meta:
        model = TODO
        fields = ['project', 'create_timestamp']