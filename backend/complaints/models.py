from django.db import models
from machine.models import Machine
from handbooks.models import RecoveryMethod, ServiceCompany, NatureOfFailure


class ComplaintsModel(models.Model):
    date_refusal = models.DateField()
    operating_time = models.IntegerField()
    failure_node = models.ForeignKey(NatureOfFailure, on_delete=models.CASCADE)
    description = models.TextField()
    recovery_method = models.ForeignKey(RecoveryMethod, on_delete=models.CASCADE)
    spare_parts = models.TextField()
    recovery_date = models.DateField()
    equipment_downtime = models.IntegerField()
    machine = models.ForeignKey(Machine, on_delete=models.CASCADE)
    service_company = models.ForeignKey(ServiceCompany, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.machine}"

