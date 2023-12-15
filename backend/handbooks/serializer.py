from .models import ModelOfEquipment, ModelOfEngine, ModelOfTransmission, ModelOfDriveAxle
from .models import ModelOfSteeringAxle, TypeOfMaintenance, NatureOfFailure, RecoveryMethod, ServiceCompany
from rest_framework import serializers


class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfEquipment
        fields = ['name', 'description']


class EngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfEngine
        fields = ['name', 'description']


class TransmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfTransmission
        fields = ['name', 'description']


class DriveAxleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfDriveAxle
        fields = ['name', 'description']


class SteeringAxleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfSteeringAxle
        fields = ['name', 'description']


class TypeOfMaintenanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfMaintenance
        fields = ['name', 'description']


class NatureOfFailureSerializer(serializers.ModelSerializer):
    class Meta:
        model = NatureOfFailure
        fields = ['name', 'description']


class RecoveryMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecoveryMethod
        fields = ['name', 'description']


class ServiceCompanySerializer(serializers.ModelSerializer):
    queryset = ServiceCompany.objects.all()

    class Meta:
        model = ServiceCompany
        fields = ['name', 'description']
