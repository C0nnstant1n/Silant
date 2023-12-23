from django.db import models
from machine.models import MachineModel
from handbooks.models import RecoveryMethod, ServiceCompany, TypeOfMaintenance, NatureOfFailure


class ComplaintsModel(models.Model):
    # engine = 'EN'
    # transmission = 'TR'
    # drive_axle = 'DA'
    # steering_axle = 'SA'
    # hydraulic = 'HY'
    # lifting_device = 'LD'
    NODES = [
        'Двигатель',
        'Трансмиссия',
        'Ведущий мост',
        'Управляемый мост',
        'Гидросистема',
        'Подъёмное устройство']

    date_refusal = models.DateField()
    operating_time = models.DecimalField(max_digits=10, decimal_places=2)
    failure_node = models.ForeignKey(NatureOfFailure, on_delete=models.CASCADE)
    description = models.TextField()
    recovery_method = models.ForeignKey(RecoveryMethod, on_delete=models.CASCADE)
    spare_parts = models.TextField()
    recovery_date = models.DateField()
    equipment_downtime = models.IntegerField()
    machine = models.ForeignKey(MachineModel, on_delete=models.CASCADE)
    service_company = models.ForeignKey(ServiceCompany, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.machine}"

