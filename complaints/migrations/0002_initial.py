# Generated by Django 5.0 on 2023-12-13 10:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('complaints', '0001_initial'),
        ('handbooks', '0001_initial'),
        ('machine', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='complaints',
            name='machine',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='machine.machine'),
        ),
        migrations.AddField(
            model_name='complaints',
            name='recovery_method',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='handbooks.recoverymethod'),
        ),
        migrations.AddField(
            model_name='complaints',
            name='service_company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='handbooks.servicecompany'),
        ),
    ]
