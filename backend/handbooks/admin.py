from django.contrib import admin

from .models import *

admin.site.register(MachineModel)
admin.site.register(ModelOfEngine)
admin.site.register(ModelOfTransmission)
admin.site.register(ModelOfDriveAxle)
admin.site.register(ModelOfSteeringAxle)
admin.site.register(TypeOfMaintenance)
admin.site.register(NatureOfFailure)
admin.site.register(RecoveryMethod)
admin.site.register(ServiceCompany)
admin.site.register(Client)
