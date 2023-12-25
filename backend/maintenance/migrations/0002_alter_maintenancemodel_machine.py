# Generated by Django 5.0 on 2023-12-24 14:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('handbooks', '0002_rename_modelofequipment_machinemodel'),
        ('maintenance', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='maintenancemodel',
            name='machine',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='handbooks.machinemodel'),
        ),
    ]