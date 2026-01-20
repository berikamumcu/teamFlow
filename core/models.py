from django.db import models
from django.contrib.auth.models import User


class Project(models.Model):
    STATUS_CHOICES = (
        ("planned", "Planned"),
        ("active", "Active"),
        ("completed", "Completed"),
    )

    name = models.CharField(max_length=255)
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="projects"
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="planned"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name




