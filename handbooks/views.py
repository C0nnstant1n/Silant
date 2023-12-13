from rest_framework import viewsets
from .serializer import *


class EquipmentView(viewsets.ModelViewSet):
    serializer_class = EquipmentSerializer

