from django.contrib.auth.models import User
from rest_framework import serializers

from handbooks.models import ModelOfDriveAxle, ModelOfEngine, ModelOfEquipment, ModelOfTransmission, ServiceCompany, \
    ModelOfSteeringAxle
from handbooks.serializer import DriveAxleSerializer, EngineSerializer, EquipmentSerializer, TransmissionSerializer, \
    ServiceCompanySerializer, SteeringAxleSerializer
from .models import MachineModel


class ClientSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    class Meta:
        model = User
        # exclude = ['username', 'email', 'is_staff', 'is_superuser', 'client']
        fields = ['username', 'email',]

    def get_username(self, obj):
        return '{}{}'.format(obj.last_name, obj.first_name)


class MachineSerializer(serializers.ModelSerializer):
    client = ClientSerializer
    model_drive_axle = DriveAxleSerializer
    model_engine = EngineSerializer
    model_equipment = EquipmentSerializer
    model_transmission = TransmissionSerializer
    service_company = ServiceCompanySerializer
    steering_axle = SteeringAxleSerializer

    class Meta:
        model = MachineModel
        depth = 1
        fields = '__all__'


class SharedMachineSerializer(serializers.ModelSerializer):
    model_drive_axle = serializers.SlugRelatedField(queryset=ModelOfDriveAxle.objects.all(), slug_field='name')
    model_engine = serializers.SlugRelatedField(queryset=ModelOfEngine.objects.all(), slug_field='name')
    model_equipment = serializers.SlugRelatedField(queryset=ModelOfEquipment.objects.all(), slug_field='name')
    model_transmission = serializers.SlugRelatedField(queryset=ModelOfTransmission.objects.all(), slug_field='name')
    steering_axle = serializers.SlugRelatedField(queryset=ModelOfSteeringAxle.objects.all(), slug_field='name')

    class Meta:
        model = MachineModel
        fields = '__all__'
