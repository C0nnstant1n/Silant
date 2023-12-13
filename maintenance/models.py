from django.db import models
from handbooks.models import TypeOfMaintenance, ServiceCompany
from machine.models import Machine


class Maintenance(models.Model):
    maintenance_type = models.ForeignKey(TypeOfMaintenance, on_delete=models.CASCADE)
    maintenance_date = models.DateField()
    operating_time = models.DecimalField(max_digits=10, decimal_places=2)
    order_number = models.TextField(max_length=128)
    order_data = models.DateField()
    machine = models.ForeignKey(Machine, on_delete=models.CASCADE)
    service_company = models.ForeignKey(ServiceCompany, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.maintenance_type}"
