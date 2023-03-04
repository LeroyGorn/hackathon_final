from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models


class CustomUserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)

        if not extra_fields.get('is_superuser'):
            raise ValueError('Superuser must have is_superuser=True')

        return self._create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    class RoleChoices(models.TextChoices):
        recruiter = 'Recruiter', 'Recruiter'
        candidate = 'Candidate', 'Candidate'

    email = models.EmailField(
        unique=True
    )

    first_name = models.CharField(
        max_length=64
    )

    last_name = models.CharField(
        max_length=64
    )

    is_staff = models.BooleanField(
        default=False
    )

    is_active = models.BooleanField(
        default=True
    )

    is_approved = models.BooleanField(
        default=False
    )

    role = models.CharField(
        max_length=16,
        choices=RoleChoices.choices
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email

    def has_role(self, role):
        if self.role == role:
            return True
        return False


class CustomUserResume(models.Model):
    user = models.OneToOneField(
        CustomUser,
        related_name="user_resume",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    photo = models.ImageField(
        upload_to="user_photos",
        null=True,
        blank=True
    )

    company_name = models.CharField(
        max_length=128,
        null=True,
        blank=True
    )

    linked_in = models.URLField(
        null=True,
        blank=True
    )

    telegram = models.URLField(
        null=True,
        blank=True
    )

    github = models.URLField(
        null=True,
        blank=True
    )

    education = models.TextField(
        null=True,
        blank=True
    )

    work_experience = models.TextField(
        null=True,
        blank=True
    )

    def __str__(self):
        return f"{self.user.email} - {self.id}"
