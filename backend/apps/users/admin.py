from django.contrib import admin

from apps.users.models import CustomUserResume, ResumeStack


admin.site.register(CustomUserResume)
admin.site.register(ResumeStack)
