from django.contrib import admin

from apps.auth_user.models import CustomUser, CustomUserResume


admin.site.register(CustomUser)
admin.site.register(CustomUserResume)
