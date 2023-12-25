from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, DjangoModelPermissions

from .serializer import *
from .models import *


class MachineModelView(viewsets.ModelViewSet):
    queryset = MachineModel.objects.all()
    serializer_class = MachineModelSerializer
    permission_classes = [DjangoModelPermissions]


class EngineView(viewsets.ModelViewSet):
    queryset = ModelOfEngine.objects.all()
    serializer_class = EngineSerializer
    permission_classes = [DjangoModelPermissions]


class TransmissionView(viewsets.ModelViewSet):
    queryset = ModelOfTransmission.objects.all()
    serializer_class = TransmissionSerializer
    permission_classes = [DjangoModelPermissions]


class DriveAxleView(viewsets.ModelViewSet):
    queryset = ModelOfDriveAxle.objects.all()
    serializer_class = DriveAxleSerializer
    permission_classes = [DjangoModelPermissions]


class SteeringAxleView(viewsets.ModelViewSet):
    queryset = ModelOfSteeringAxle.objects.all()
    serializer_class = SteeringAxleSerializer
    permission_classes = [DjangoModelPermissions]


class NatureOfFailureView(viewsets.ModelViewSet):
    queryset = NatureOfFailure.objects.all()
    serializer_class = NatureOfFailureSerializer
    permission_classes = [DjangoModelPermissions]


class TypeOfMaintenanceView(viewsets.ModelViewSet):
    queryset = TypeOfMaintenance.objects.all()
    serializer_class = TypeOfMaintenanceSerializer
    permission_classes = [DjangoModelPermissions]


class RecoveryMethodView(viewsets.ModelViewSet):
    queryset = RecoveryMethod.objects.all()
    serializer_class = RecoveryMethodSerializer
    permission_classes = [DjangoModelPermissions]


class ServiceCompanyView(viewsets.ModelViewSet):
    queryset = ServiceCompany.objects.all()
    serializer_class = ServiceCompanySerializer
    permission_classes = [DjangoModelPermissions]


class ClientView(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    permission_classes = [DjangoModelPermissions]


def index(request):
    return render(request, 'default.html')
