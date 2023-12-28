from rest_framework import serializers
from handbooks.serializer import ServiceCompanySerializer, TypeOfMaintenanceSerializer
from machine.models import Machine
from .models import MaintenanceModel


class GetMaintenanceSerializer(serializers.ModelSerializer):
    maintenance_type = TypeOfMaintenanceSerializer()
    service_company = ServiceCompanySerializer()
    machine = serializers.SlugRelatedField(queryset=Machine.objects.all(), slug_field='machine_serial_number')

    class Meta:
        model = MaintenanceModel
        fields = '__all__'
        depth = 1


class SetMaintenanceSerializer(serializers.ModelSerializer):
    maintenance_type = TypeOfMaintenanceSerializer
    service_company = ServiceCompanySerializer
    machine = serializers.SlugRelatedField(queryset=Machine.objects.all(), slug_field='machine_serial_number')

    class Meta:
        model = MaintenanceModel
        fields = '__all__'