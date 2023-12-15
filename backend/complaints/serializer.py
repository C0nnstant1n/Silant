from rest_framework import serializers
from .models import ComplaintsModel


class ComplaintsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComplaintsModel
        fields = '__all__'

