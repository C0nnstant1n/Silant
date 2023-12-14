from rest_framework import viewsets
from .serializer import *
from .models import *

class EquipmentView(viewsets.ModelViewSet):
    queryset = ModelOfEquipment.objects.all()
    serializer_class = EquipmentSerializer


class EngineView(viewsets.ModelViewSet):
    queryset = ModelOfEngine.objects.all()
    serializer_class = EngineSerializer


class TransmissionView(viewsets.ModelViewSet):
    queryset = ModelOfTransmission.objects.all()
    serializer_class = TransmissionSerializer


class DriveAxleView(viewsets.ModelViewSet):
    queryset = ModelOfDriveAxle.objects.all()
    serializer_class = DriveAxleSerializer


class SteeringAxleView(viewsets.ModelViewSet):
    queryset = ModelOfSteeringAxle.objects.all()
    serializer_class = SteeringAxleSerializer


class NatureOfFailureView(viewsets.ModelViewSet):
    queryset = NatureOfFailure.objects.all()
    serializer_class = NatureOfFailureSerializer


class TypeOfMaintenanceView(viewsets.ModelViewSet):
    queryset = TypeOfMaintenance.objects.all()
    serializer_class = TypeOfMaintenanceSerializer


class RecoveryMethodView(viewsets.ModelViewSet):
    queryset = RecoveryMethod.objects.all()
    serializer_class = RecoveryMethodSerializer


class ServiceCompanyView(viewsets.ModelViewSet):
    queryset = ServiceCompany.objects.all()
    serializer_class = ServiceCompanySerializer
