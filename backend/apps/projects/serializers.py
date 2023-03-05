from rest_framework import serializers

from apps.projects.models import Project
from apps.users.serializers import ResumeStackSerializer
from apps.users.models import ResumeStack
from apps.auth_user.models import CustomUser


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ['name', 'description', 'max_members', 'project_stack']

    def to_representation(self, obj):
        ret = super().to_representation(obj)
        project_stack = obj.project_stack.all()
        serialized = ResumeStackSerializer(project_stack, many=True)
        ret['project_stack'] = [i["stack_item"] for i in serialized.data]
        return ret

    def get_project_stack(self, obj):
        project_stack = obj.tech_stack.all()
        serialized = ResumeStackSerializer(project_stack, many=True)
        return [i["stack_item"] for i in serialized.data]


class ProjectCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['name', 'description', 'max_members', 'is_open', 'is_active', 'project_stack']

    def to_representation(self, obj):
        ret = super().to_representation(obj)
        project_stack = obj.project_stack.all()
        serialized = ResumeStackSerializer(project_stack, many=True)
        ret['project_stack'] = [i["stack_item"] for i in serialized.data]
        return ret

    def get_project_stack(self, obj):
        project_stack = obj.tech_stack.all()
        serialized = ResumeStackSerializer(project_stack, many=True)
        return [i["stack_item"] for i in serialized.data]

    def create(self, validated_data):
        user = self.context['request'].user
        project = Project.objects.create(
            founder=user,
            name=validated_data.get('name'),
            description=validated_data.get('description'),
            max_members=validated_data.get('max_members'),
            is_open=validated_data.get('is_open'),
        )
        project.members.add(user)
        data_list = validated_data.get('project_stack')
        if data_list:
            project.project_stack.add(*data_list)
        return project

    def to_internal_value(self, data):
        stack = data.get('project_stack')
        members = data.get('members')
        wait_members = data.get('wait_members')
        if stack:
            data['project_stack'] = [ResumeStack.objects.get(stack_item=i).id for i in stack]
        # if wait_members:
        #     data['members'] = [User.objects.get(name=i).id for i in stack]
        return super(ProjectCreateUpdateSerializer, self).to_internal_value(data)

    def update(self, instance, validated_data):
        # if 'members' in validated_data:
        #     nested_serializer = self.fields['user']
        #     nested_instance = instance.user
        #     nested_data = validated_data.pop('user')
        #     nested_serializer.update(nested_instance, nested_data)
        if 'project_stack' in validated_data:
            data_list = validated_data.get('project_stack')
            instance.project_stack.add(*data_list)
        return super(ProjectCreateUpdateSerializer, self).update(instance, validated_data)
