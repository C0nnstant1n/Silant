from rest_framework import serializers
from .models import MachineModel


class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = MachineModel
        fields = '__all__'
