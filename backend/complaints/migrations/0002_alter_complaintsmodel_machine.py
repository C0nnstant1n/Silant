# Generated by Django 5.0 on 2023-12-24 14:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('complaints', '0001_initial'),
        ('handbooks', '0002_rename_modelofequipment_machinemodel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='complaintsmodel',
            name='machine',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='handbooks.machinemodel'),
        ),
    ]