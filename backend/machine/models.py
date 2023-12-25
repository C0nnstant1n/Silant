from django.db import models
from handbooks.models import ModelOfEngine, ModelOfTransmission, ModelOfDriveAxle, MachineModel, Client
from handbooks.models import ModelOfSteeringAxle, ServiceCompany
from django.contrib.auth.models import User


class Machine(models.Model):
    machine_serial_number = models.CharField(max_length=128, unique=True)
    machine_model = models.ForeignKey(MachineModel, on_delete=models.CASCADE)
    model_engine = models.ForeignKey(ModelOfEngine, on_delete=models.CASCADE)
    engine_serial_number = models.TextField(max_length=256)
    model_transmission = models.ForeignKey(ModelOfTransmission, on_delete=models.CASCADE)
    transmission_serial_number = models.TextField(max_length=256)
    model_drive_axle = models.ForeignKey(ModelOfDriveAxle, on_delete=models.CASCADE)
    drive_axle_serial_number = models.TextField(max_length=256)
    steering_axle = models.ForeignKey(ModelOfSteeringAxle, on_delete=models.CASCADE)
    steering_axle_serial_number = models.TextField(max_length=256)
    supply_contract = models.CharField(max_length=256)
    date_shipped_from_factory = models.DateField()
    consignee = models.TextField(max_length=256)
    delivery_address = models.TextField(max_length=256)
    equipment = models.TextField(max_length=256, blank=True)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    service_company = models.ForeignKey(ServiceCompany, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.machine_model}"

    # class HandBookModel(models.Model):
    #     name = models.TextField(max_length=256)
    #     # machine_model = models.ForeignKey(MachineModel, on_delete=models.CASCADE)
    #     engine_model = models.ForeignKey(ModelOfEngine, on_delete=models.CASCADE)
    #     transmission_model = models.ForeignKey(ModelOfTransmission, on_delete=models.CASCADE)
    #     drive_axle_model = models.ForeignKey(ModelOfDriveAxle, on_delete=models.CASCADE)
    #     steering_axle_model = models.ForeignKey(ModelOfSteeringAxle, on_delete=models.CASCADE)
    #     maintenance_type = models.ForeignKey(TypeOfMaintenance, on_delete=models.CASCADE)
    #     failure = models.ForeignKey(NatureOfFailure, on_delete=models.CASCADE)
    #     recovery_method = models.ForeignKey(RecoveryMethod, on_delete=models.CASCADE)
    #     service_company = models.ForeignKey(ServiceCompany, on_delete=models.CASCADE)
    #
    #     def __str__(self):
    #         return f"{self.name} - {self.engine_model} - {self}"
