# Generated by Django 5.0 on 2023-12-14 12:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('handbooks', '0004_handbooksmodel'),
    ]

    operations = [
        migrations.RenameField(
            model_name='handbooksmodel',
            old_name='service_company',
            new_name='service',
        ),
    ]