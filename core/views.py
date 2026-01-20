from django.contrib.auth import get_user_model
from rest_framework import generics
from .models import Project
from .serializers import UserSerializer, ProjectSerializer

User = get_user_model()


# USERS API (LIST + CREATE)
class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# USERS DETAIL (DELETE / UPDATE)

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer



# PROJECTS API (LIST + CREATE)
class ProjectListCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.select_related("user")
    serializer_class = ProjectSerializer


# PROJECT DETAIL (DELETE / UPDATE)
class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
