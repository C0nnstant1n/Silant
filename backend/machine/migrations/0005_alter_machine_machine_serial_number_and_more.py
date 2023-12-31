# Generated by Django 5.0 on 2023-12-25 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machine', '0004_alter_machine_client'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='machine_serial_number',
            field=models.CharField(max_length=128, unique=True),
        ),
        migrations.AlterField(
            model_name='machine',
            name='supply_contract',
            field=models.CharField(max_length=256),
        ),
    ]
