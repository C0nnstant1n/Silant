# Generated by Django 5.0 on 2023-12-25 02:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('handbooks', '0004_rename_user_client_username'),
    ]

    operations = [
        migrations.RenameField(
            model_name='client',
            old_name='username',
            new_name='user',
        ),
    ]
