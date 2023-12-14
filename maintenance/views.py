from rest_framework import viewsets
from .serializer import MaintenanceSerializer
from .models import MaintenanceModel


class MaintenanceViewSet(viewsets.ModelViewSet):
    queryset = MaintenanceModel.objects.all()
    serializer_class = MaintenanceSerializer
