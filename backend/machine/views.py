from django.contrib.auth.models import Group
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import generics
from .serializer import MachineSerializer, SharedMachineSerializer
from .models import MachineModel
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q


class MachineViewSet(viewsets.ModelViewSet):
    serializer_class = MachineSerializer

    def get_queryset(self):
        user = self.request.user
        group = user.groups.values_list('name', flat=True)
        if 'Manager' in group:
            return MachineModel.objects.all().order_by('-date_shipped_from_factory')
        return (MachineModel.objects.filter(Q(client=user) | Q(service_company__user=user)).
                order_by('-date_shipped_from_factory'))


class SharedMachineViewSet(generics.ListAPIView, viewsets.ModelViewSet):
    queryset = MachineModel.objects.all()
    serializer_class = SharedMachineSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['machine_serial_number']
