from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Project

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]


class ProjectSerializer(serializers.ModelSerializer):
    user_username = serializers.CharField(
        source="user.username",
        read_only=True
    )

    class Meta:
        model = Project
        fields = ["id", "name", "status", "user", "user_username"]
