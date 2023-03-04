from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from apps.auth_user.models import CustomUser, CustomUserResume


class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = [
            'email',
            'first_name',
            'last_name',
            'role',
        ]


class UserSerializer(serializers.ModelSerializer):
    check_password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = [
            'email',
            'password',
            'check_password',
            'first_name',
            'last_name',
            'role',
        ]
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        return CustomUser.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            role=validated_data['role'],
        )

    def validate(self, attrs):
        if attrs['password'] != attrs['check_password']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs


class CustomObtainTokenSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['email'] = self.user.email
        data['first_name'] = self.user.first_name
        data['last_name'] = self.user.last_name
        data['role'] = self.user.role
        return data

    @classmethod
    def get_token(cls, user):
        token = super(CustomObtainTokenSerializer, cls).get_token(user)
        token['email'] = user.email
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['role'] = user.role
        return token


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
    user = CustomUserSerializer()

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
        ]

    def create(self, validated_data):
        user = self.context['request'].user
        return CustomUserResume.objects.create(
            user=user,
            photo=validated_data.get('photo'),
            linked_in=validated_data.get('linked_in'),
            telegram=validated_data.get('telegram'),
            github=validated_data.get('github'),
            education=validated_data.get('education'),
            work_experience=validated_data.get('work_experience'),
        )

    def update(self, instance, validated_data):
        if 'user' in validated_data:
            nested_serializer = self.fields['user']
            nested_instance = instance.user
            nested_data = validated_data.pop('user')
            nested_serializer.update(nested_instance, nested_data)

        return super(CandidateSummarySerializer, self).update(instance, validated_data)
