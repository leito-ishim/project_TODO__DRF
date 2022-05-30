from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import Project, TODO
from .serializers import ProjectModelSerializer, TODOModelSerializer
from rest_framework.pagination import LimitOffsetPagination
from .filters import ProjectFilter, TODOFilter

# Create your views here.


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TODOLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer
    pagination_class = TODOLimitOffsetPagination
    filterset_class = TODOFilter
    filter_backends = (DjangoFilterBackend,)

    # def destroy(self, request, *args, **kwargs):
    #     note = self.get_object()
    #     note.is_active = False
    #     note.save()
    #     return Response(status=status.HTTP_200_OK)
    def destroy(self, request, *args, **kwargs):
        note = self.get_object()
        note.is_active = False
        note.save()
        return Response(status=status.HTTP_200_OK)



