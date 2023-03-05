from django.db import models


class Project(models.Model):
    founder = models.ForeignKey(
        "auth_user.CustomUser",
        related_name="owned_projects",
        on_delete=models.CASCADE
    )

    name = models.CharField(
        max_length=64,
        unique=True,
    )

    description = models.CharField(
        max_length=1024,
    )

    wait_members = models.ManyToManyField(
        "auth_user.CustomUser",
        related_name="projects_await",
        blank=True
    )

    members = models.ManyToManyField(
        "auth_user.CustomUser",
        related_name="projects",
        blank=True
    )

    max_members = models.PositiveSmallIntegerField(default=1)

    is_open = models.BooleanField()

    is_active = models.BooleanField(default=True)

    created = models.DateField(
        auto_now_add=True,
    )

    def __str__(self):
        return f"{self.id} - {self.name}"
