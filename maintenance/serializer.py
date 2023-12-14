from rest_framework import serializers
from .models import MaintenanceModel


class MaintenanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MaintenanceModel
        fields = '__all__'
