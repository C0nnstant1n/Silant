from rest_framework import serializers
from handbooks.serializer import ServiceCompanySerializer, TypeOfMaintenanceSerializer
from machine.models import MachineModel
from .models import MaintenanceModel


class MaintenanceSerializer(serializers.ModelSerializer):
    maintenance_type = TypeOfMaintenanceSerializer
    service_company = ServiceCompanySerializer
    machine = serializers.SlugRelatedField(queryset=MachineModel.objects.all(), slug_field='machine_serial_number')

    class Meta:
        model = MaintenanceModel
        fields = '__all__'
        depth = 1
