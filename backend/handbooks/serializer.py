from django.contrib.auth.models import User
from django.template import Engine

from machine.models import MachineModel
from .models import ModelOfEngine, ModelOfTransmission, ModelOfDriveAxle, Client
from .models import ModelOfSteeringAxle, TypeOfMaintenance, NatureOfFailure, RecoveryMethod, ServiceCompany
from rest_framework import serializers


class MachineModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MachineModel
        fields = '__all__'


class EngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfEngine
        fields = '__all__'


class TransmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfTransmission
        fields = '__all__'


class DriveAxleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfDriveAxle
        fields = '__all__'


class SteeringAxleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfSteeringAxle
        fields = '__all__'


class TypeOfMaintenanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfMaintenance
        fields = '__all__'


class NatureOfFailureSerializer(serializers.ModelSerializer):
    class Meta:
        model = NatureOfFailure
        fields = '__all__'


class RecoveryMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecoveryMethod
        fields = '__all__'


class ServiceCompanySerializer(serializers.ModelSerializer):

    class Meta:
        model = ServiceCompany
        fields = ['id', 'name', 'description']


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'name', 'description']


