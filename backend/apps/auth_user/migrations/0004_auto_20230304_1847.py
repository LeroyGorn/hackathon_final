# Generated by Django 3.2.16 on 2023-03-04 18:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auth_user', '0003_auto_20230304_1832'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='resumestack',
            name='resume',
        ),
        migrations.DeleteModel(
            name='CustomUserResume',
        ),
        migrations.DeleteModel(
            name='ResumeStack',
        ),
    ]
