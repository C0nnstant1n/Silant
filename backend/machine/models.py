from django.db import models
from handbooks.models import ModelOfEngine, ModelOfTransmission, ModelOfDriveAxle, MachineModel, Client
from handbooks.models import ModelOfSteeringAxle, ServiceCompany
from django.contrib.auth.models import User


class Machine(models.Model):
    machine_serial_number = models.CharField(max_length=128, verbose_name="Зав. № машины", unique=True)
    machine_model = models.ForeignKey(MachineModel, verbose_name="Модель техники" ,on_delete=models.CASCADE)
    model_engine = models.ForeignKey(ModelOfEngine, verbose_name="Модель Двигателя" ,on_delete=models.CASCADE)
    engine_serial_number = models.TextField(max_length=256, verbose_name="Зав. № Двигателя")
    model_transmission = models.ForeignKey(ModelOfTransmission,
                                           verbose_name="Модель трансмиссии (производитель, артикул)",
                                           on_delete=models.CASCADE)
    transmission_serial_number = models.TextField(max_length=256, verbose_name="Зав. № трансмиссии")
    model_drive_axle = models.ForeignKey(ModelOfDriveAxle,verbose_name="Модель ведущего моста",
                                         on_delete=models.CASCADE)
    drive_axle_serial_number = models.TextField(max_length=256, verbose_name="Зав. № ведущего моста")
    steering_axle = models.ForeignKey(ModelOfSteeringAxle,verbose_name="Модель управляемого моста",
                                      on_delete=models.CASCADE)
    steering_axle_serial_number = models.TextField(max_length=256, verbose_name="Зав. № управляемого моста")
    supply_contract = models.CharField(max_length=256, verbose_name="№ договора поставки")
    date_shipped_from_factory = models.DateField(verbose_name="Дата отгрузки с завода")
    consignee = models.TextField(max_length=256, verbose_name="Грузополучатель (конечный потребитель)")
    delivery_address = models.TextField(max_length=256, verbose_name="Адрес поставки (эксплуатации)")
    equipment = models.TextField(max_length=256,verbose_name="Комплектация (доп. опции)", blank=True)
    client = models.ForeignKey(Client,verbose_name="Клиент" , on_delete=models.CASCADE)
    service_company = models.ForeignKey(ServiceCompany,verbose_name="Сервисная компания",
                                        on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.machine_model} зводской номер {self.machine_serial_number}"
