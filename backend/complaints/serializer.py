from rest_framework import serializers
from handbooks.serializer import RecoveryMethodSerializer, ServiceCompanySerializer, NatureOfFailureSerializer
from machine.models import MachineModel, Machine
from machine.serializer import GetMachineSerializer
from .models import ComplaintsModel


class GetComplaintsSerializer(serializers.ModelSerializer):
    machine = GetMachineSerializer()
    recovery_method = RecoveryMethodSerializer(read_only=True)
    service_company = ServiceCompanySerializer(read_only=True)
    failure_node = NatureOfFailureSerializer(read_only=True)

    class Meta:
        model = ComplaintsModel
        depth = 1
        fields = '__all__'


class SetComplaintsModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComplaintsModel
        fields = '__all__'
