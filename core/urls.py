from django.urls import path
from .views import (
    UserListCreateView,
    ProjectListCreateView,
    ProjectDetailView,
    UserDetailView,
)

urlpatterns = [
    path("users/", UserListCreateView.as_view()),
    path("projects/", ProjectListCreateView.as_view()),
    path("projects/<int:pk>/", ProjectDetailView.as_view()),
    path("users/<int:pk>/", UserDetailView.as_view()),
]



