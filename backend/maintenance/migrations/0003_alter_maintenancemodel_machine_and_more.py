# Generated by Django 5.0 on 2023-12-28 03:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machine', '0005_alter_machine_machine_serial_number_and_more'),
        ('maintenance', '0002_alter_maintenancemodel_machine'),
    ]

    operations = [
        migrations.AlterField(
            model_name='maintenancemodel',
            name='machine',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='machine.machine'),
        ),
        migrations.AlterField(
            model_name='maintenancemodel',
            name='operating_time',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='maintenancemodel',
            name='order_number',
            field=models.CharField(max_length=128),
        ),
    ]
