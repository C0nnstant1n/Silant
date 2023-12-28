from django.db import models
from handbooks.models import TypeOfMaintenance, ServiceCompany
from machine.models import MachineModel, Machine


class MaintenanceModel(models.Model):
    maintenance_type = models.ForeignKey(TypeOfMaintenance, on_delete=models.CASCADE)
    maintenance_date = models.DateField()
    operating_time = models.IntegerField(default=0)
    order_number = models.CharField(max_length=128)
    order_date = models.DateField()
    machine = models.ForeignKey(Machine, on_delete=models.CASCADE)
    service_company = models.ForeignKey(ServiceCompany, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.maintenance_type}"
