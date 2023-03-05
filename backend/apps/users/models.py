from django.db import models


class CustomUserResume(models.Model):
    user = models.OneToOneField(
        "auth_user.CustomUser",
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

    years_experience = models.PositiveSmallIntegerField(
        default=0
    )

    is_public = models.BooleanField(
        default=True
    )

    def __str__(self):
        return f"{self.user.email} - {self.id}"


class ResumeStack(models.Model):
    class StackChoices(models.TextChoices):
        python = "Python", "python"
        c = "C", "c"
        scala = 'Scala', 'scala'
        c_plus = 'C++', 'cplus'
        c_sharp = 'C#', 'csharp'
        java = 'Java', 'java'
        js = 'JavaScript', 'javascript'
        ruby = 'Ruby', 'ruby'
        php = 'PHP', 'php'
        django = 'Django', 'django'
        flask = 'Flask', 'flask'
        fastapi = 'FastAPI', 'fastapi'
        laravel = 'Laravel', 'laravel'
        symfony = 'Symfony', 'symfony'
        spring = 'Spring', 'spring'
        net = '.NET', 'net'
        react = 'React', 'react'
        angular = 'Angular', 'angular'
        rails = 'Ruby on rails', 'ruby on rails'
        ts = 'TypeScript', 'typescript'
        mysql = 'MySQL', 'mysql'
        pgsql = 'PostgreSQL', 'postgresql'
        celery = 'Celery', 'celery'

    resume = models.ManyToManyField(
        CustomUserResume,
        related_name="tech_stack",
        blank=True
    )

    project = models.ManyToManyField(
        "projects.Project",
        related_name="project_stack",
        blank=True
    )

    stack_item = models.CharField(
        max_length=16,
        unique=True,
        choices=StackChoices.choices
    )
