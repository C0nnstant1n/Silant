# Generated by Django 5.0 on 2023-12-24 13:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('machine', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='machinemodel',
            old_name='model_equipment',
            new_name='machine_model',
        ),
    ]
