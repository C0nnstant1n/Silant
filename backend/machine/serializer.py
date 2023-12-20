from django.contrib.auth.models import User
from rest_framework import serializers

from handbooks.models import ModelOfDriveAxle, ModelOfEngine, ModelOfEquipment, ModelOfTransmission, ServiceCompany, \
    ModelOfSteeringAxle
from .models import MachineModel


class MachineSerializer(serializers.ModelSerializer):
    client = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='username')
    model_drive_axle = serializers.SlugRelatedField(queryset=ModelOfDriveAxle.objects.all(), slug_field='name')
    model_engine = serializers.SlugRelatedField(queryset=ModelOfEngine.objects.all(), slug_field='name')
    model_equipment = serializers.SlugRelatedField(queryset=ModelOfEquipment.objects.all(), slug_field='name')
    model_transmission = serializers.SlugRelatedField(queryset=ModelOfTransmission.objects.all(), slug_field='name')
    service_company = serializers.SlugRelatedField(queryset=ServiceCompany.objects.all(), slug_field='name')
    steering_axle = serializers.SlugRelatedField(queryset=ModelOfSteeringAxle.objects.all(), slug_field='name')

    class Meta:
        model = MachineModel
        fields = ['id', 'model_equipment', 'machine_serial_number',
                  'model_engine', 'engine_serial_number', 'model_transmission',
                  'transmission_serial_number', 'model_drive_axle', 'drive_axle_serial_number',
                  'steering_axle', 'steering_axle_serial_number', 'date_shipped_from_factory',
                  "client", 'consignee', 'delivery_address', 'equipment', 'service_company',
                  'supply_contract']


class SharedMachineSerializer(serializers.ModelSerializer):
    model_drive_axle = serializers.SlugRelatedField(queryset=ModelOfDriveAxle.objects.all(), slug_field='name')
    model_engine = serializers.SlugRelatedField(queryset=ModelOfEngine.objects.all(), slug_field='name')
    model_equipment = serializers.SlugRelatedField(queryset=ModelOfEquipment.objects.all(), slug_field='name')
    model_transmission = serializers.SlugRelatedField(queryset=ModelOfTransmission.objects.all(), slug_field='name')
    steering_axle = serializers.SlugRelatedField(queryset=ModelOfSteeringAxle.objects.all(), slug_field='name')

    class Meta:
        model = MachineModel
        fields = ['id', 'model_equipment', 'machine_serial_number',
                  'model_engine', 'engine_serial_number', 'model_transmission',
                  'transmission_serial_number', 'model_drive_axle', 'drive_axle_serial_number',
                  'steering_axle', 'steering_axle_serial_number',
                  ]
