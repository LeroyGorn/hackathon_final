from rest_framework import serializers
from apps.auth_user.models import CustomUser
from apps.users.models import CustomUserResume, ResumeStack


class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = [
            'email',
            'first_name',
            'last_name',
            'role',
        ]


class CandidateUserSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = CustomUser
        fields = [
            'id',
            'first_name',
            'last_name',
        ]


class ResumeStackSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResumeStack
        fields = ['stack_item']


class CandidateResumeSerializer(serializers.ModelSerializer):
    user = CandidateUserSerializer()

    class Meta:
        model = CustomUserResume
        fields = [
            'user',
            'work_experience',
            'education',
            'years_experience',
            'tech_stack'
        ]

    def to_representation(self, obj):
        ret = super().to_representation(obj)
        tech_stack = obj.tech_stack.all()
        serialized = ResumeStackSerializer(tech_stack, many=True)
        ret['tech_stack'] = [i["stack_item"] for i in serialized.data]
        return ret

    def get_tech_stack(self, obj):
        tech_stack = obj.tech_stack.all()
        serialized = ResumeStackSerializer(tech_stack, many=True)
        return [i["stack_item"] for i in serialized.data]


class RecruiterSummarySerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = CustomUserResume
        fields = [
            'user',
            'photo',
            'company_name',
            'linked_in',
            'telegram',
        ]

    def create(self, validated_data):
        user = self.context['request'].user
        return CustomUserResume.objects.create(
            user=user,
            photo=validated_data.get('photo'),
            linked_in=validated_data.get('linked_in'),
            telegram=validated_data.get('telegram'),
            company_name=validated_data.get('company_name'),
        )

    def update(self, instance, validated_data):
        if 'user' in validated_data:
            nested_serializer = self.fields['user']
            nested_instance = instance.user
            nested_data = validated_data.pop('user')
            nested_serializer.update(nested_instance, nested_data)

        return super(RecruiterSummarySerializer, self).update(instance, validated_data)


class CandidateSummarySerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(required=False)

    class Meta:
        model = CustomUserResume
        fields = [
            'user',
            'photo',
            'linked_in',
            'telegram',
            'github',
            'work_experience',
            'education',
            'years_experience',
            'is_public',
            'tech_stack'
        ]

    def to_representation(self, obj):
        ret = super().to_representation(obj)
        tech_stack = obj.tech_stack.all()
        serialized = ResumeStackSerializer(tech_stack, many=True)
        ret['tech_stack'] = [i["stack_item"] for i in serialized.data]
        return ret

    def get_tech_stack(self, obj):
        tech_stack = obj.tech_stack.all()
        serialized = ResumeStackSerializer(tech_stack, many=True)
        return [i["stack_item"] for i in serialized.data]

    def create(self, validated_data):
        user = self.context['request'].user
        resume = CustomUserResume.objects.create(
            user=user,
            photo=validated_data.get('photo'),
            linked_in=validated_data.get('linked_in'),
            telegram=validated_data.get('telegram'),
            github=validated_data.get('github'),
            education=validated_data.get('education'),
            work_experience=validated_data.get('work_experience'),
            years_experience=validated_data.get('years_experience'),
            is_public=validated_data.get('is_public'),
        )
        data_list = validated_data.get('tech_stack')
        if data_list:
            resume.tech_stack.add(*data_list)
        return resume

    def to_internal_value(self, data):
        stack = data.get('tech_stack')
        if stack:
            data['tech_stack'] = [ResumeStack.objects.get(stack_item=i).id for i in stack]
        return super(CandidateSummarySerializer, self).to_internal_value(data)

    def update(self, instance, validated_data):
        if 'user' in validated_data:
            nested_serializer = self.fields['user']
            nested_instance = instance.user
            nested_data = validated_data.pop('user')
            nested_serializer.update(nested_instance, nested_data)
        if 'tech_stack' in validated_data:
            data_list = validated_data.get('tech_stack')
            instance.tech_stack.add(*data_list)
        return super(CandidateSummarySerializer, self).update(instance, validated_data)
