from rest_framework import serializers

from handbooks.models import RecoveryMethod, ServiceCompany, NatureOfFailure
from machine.models import MachineModel
from .models import ComplaintsModel


class ComplaintsSerializer(serializers.ModelSerializer):
    machine = serializers.SlugRelatedField(queryset=MachineModel.objects.all(), slug_field='machine_serial_number')
    recovery_method = serializers.SlugRelatedField(queryset=RecoveryMethod.objects.all(), slug_field='name')
    service_company = serializers.SlugRelatedField(queryset=ServiceCompany.objects.all(), slug_field='name')
    failure_node = serializers.SlugRelatedField(queryset=NatureOfFailure.objects.all(), slug_field='name')

    class Meta:
        model = ComplaintsModel
        fields = '__all__'
