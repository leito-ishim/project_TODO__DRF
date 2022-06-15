from rest_framework import serializers
from .models import Project, TODO


class ProjectModelSerializer(serializers.ModelSerializer):
    #users = serializers.StringRelatedField(many=True)
    #users = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'

# HyperlinkedModelSerializer
class TODOModelSerializer(serializers.ModelSerializer):
    # project = ProjectModelSerializer()
    class Meta:
        model = TODO
        fields = '__all__'

