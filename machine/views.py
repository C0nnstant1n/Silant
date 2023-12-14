from rest_framework import viewsets
from .serializer import MachineSerializer
from .models import MachineModel


class MachineViewSet(viewsets.ModelViewSet):
    queryset = MachineModel.objects.all()
    serializer_class = MachineSerializer
