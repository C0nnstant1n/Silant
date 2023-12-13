from django.db import models
from machine.models import Machine
from handbooks.models import RecoveryMethod, ServiceCompany, TypeOfMaintenance
# from datetime import datetime, timedelta


class Complaints(models.Model):
    date_refusal = models.DateField()
    operating_time = models.DecimalField(max_digits=10, decimal_places=2)
    failure_node = models.ForeignKey(TypeOfMaintenance, on_delete=models.CASCADE)
    description = models.TextField()
    recovery_method = models.ForeignKey(RecoveryMethod, on_delete=models.CASCADE)
    spare_parts = models.TextField()
    recovery_date = models.DateField()
    equipment_downtime = models.IntegerField()
    machine = models.ForeignKey(Machine, on_delete=models.CASCADE)
    service_company = models.ForeignKey(ServiceCompany, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.machine}"
