# Generated by Django 5.0 on 2023-12-30 13:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('handbooks', '0005_rename_username_client_user'),
        ('machine', '0005_alter_machine_machine_serial_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='handbooks.client', verbose_name='Клиент'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='consignee',
            field=models.TextField(max_length=256, verbose_name='Грузополучатель (конечный потребитель)'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='date_shipped_from_factory',
            field=models.DateField(verbose_name='Дата отгрузки с завода'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='delivery_address',
            field=models.TextField(max_length=256, verbose_name='Адрес поставки (эксплуатации)'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='drive_axle_serial_number',
            field=models.TextField(max_length=256, verbose_name='Зав. № ведущего моста'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='engine_serial_number',
            field=models.TextField(max_length=256, verbose_name='Зав. № Двигателя'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='equipment',
            field=models.TextField(blank=True, max_length=256, verbose_name='Комплектация (доп. опции)'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='machine_model',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='handbooks.machinemodel', verbose_name='Модель техники'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='machine_serial_number',
            field=models.CharField(max_length=128, unique=True, verbose_name='Зав. № машины'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='model_drive_axle',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='handbooks.modelofdriveaxle', verbose_name='Модель ведущего моста'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='model_engine',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='handbooks.modelofengine', verbose_name='Модель Двигателя'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='model_transmission',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='handbooks.modeloftransmission', verbose_name='Модель трансмиссии (производитель, артикул)'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='service_company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='handbooks.servicecompany', verbose_name='Сервисная компания'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='steering_axle',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='handbooks.modelofsteeringaxle', verbose_name='Модель управляемого моста'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='steering_axle_serial_number',
            field=models.TextField(max_length=256, verbose_name='Зав. № управляемого моста'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='supply_contract',
            field=models.CharField(max_length=256, verbose_name='№ договора поставки'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='transmission_serial_number',
            field=models.TextField(max_length=256, verbose_name='Зав. № трансмиссии'),
        ),
    ]
