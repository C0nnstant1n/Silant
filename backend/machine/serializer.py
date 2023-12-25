from django.contrib.auth.models import User
from rest_framework import serializers

from handbooks.models import ModelOfDriveAxle, ModelOfEngine, ModelOfTransmission, ServiceCompany, \
    ModelOfSteeringAxle, MachineModel
from handbooks.serializer import DriveAxleSerializer, EngineSerializer, TransmissionSerializer, \
    ServiceCompanySerializer, SteeringAxleSerializer, ClientSerializer, MachineModelSerializer
from .models import Machine


class GetMachineSerializer(serializers.ModelSerializer):
    client = ClientSerializer()
    model_drive_axle = DriveAxleSerializer()
    model_engine = EngineSerializer()
    machine_model = MachineModelSerializer()
    model_transmission = TransmissionSerializer()
    service_company = ServiceCompanySerializer()
    steering_axle = SteeringAxleSerializer()

    class Meta:
        model = Machine
        depth = 1
        fields = ['id', 'machine_model', 'machine_serial_number', 'model_engine', 'engine_serial_number',
                  'model_transmission', 'transmission_serial_number', 'model_drive_axle', 'drive_axle_serial_number',
                  'steering_axle', 'steering_axle_serial_number', 'supply_contract', 'date_shipped_from_factory',
                  'consignee', 'delivery_address', 'equipment', 'client', 'service_company']


class PostMachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Machine
        fields = '__all__'


class SharedMachineSerializer(serializers.ModelSerializer):
    model_drive_axle = serializers.SlugRelatedField(queryset=ModelOfDriveAxle.objects.all(), slug_field='name')
    model_engine = serializers.SlugRelatedField(queryset=ModelOfEngine.objects.all(), slug_field='name')
    machine_model = serializers.SlugRelatedField(queryset=MachineModel.objects.all(), slug_field='name')
    model_transmission = serializers.SlugRelatedField(queryset=ModelOfTransmission.objects.all(), slug_field='name')
    steering_axle = serializers.SlugRelatedField(queryset=ModelOfSteeringAxle.objects.all(), slug_field='name')

    class Meta:
        model = Machine
        read_only_fields = ['id', 'machine_model', 'machine_serial_number', 'model_engine', 'engine_serial_number',
                  'model_transmission', 'transmission_serial_number', 'model_drive_axle', 'drive_axle_serial_number',
                  'steering_axle', 'steering_axle_serial_number']
        fields = ['id', 'machine_model', 'machine_serial_number', 'model_engine', 'engine_serial_number',
                  'model_transmission', 'transmission_serial_number', 'model_drive_axle', 'drive_axle_serial_number',
                  'steering_axle', 'steering_axle_serial_number']
