from django.contrib.auth.models import Group
from django.views.generic import ListView
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import generics

from .filters import MachineFilter
from .serializer import GetMachineSerializer, SharedMachineSerializer, PostMachineSerializer
from .models import Machine
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q
from rest_framework.permissions import DjangoModelPermissions, IsAdminUser


class GetMachineViewSet(viewsets.ModelViewSet):
    serializer_class = GetMachineSerializer
    permission_classes = [DjangoModelPermissions]

    def get_queryset(self):
        user = self.request.user
        group = user.groups.values_list('name', flat=True)
        print(user, '  ', user.groups.values_list('name', flat=True))
        if 'Manager' in group:
            print('manager')
            queryset = Machine.objects.all().order_by('-date_shipped_from_factory')
            self.filterset = MachineFilter(self.request.GET, queryset)
            return self.filterset.qs

        queryset = (Machine.objects.filter(Q(client__user=user) |
                                           Q(service_company__user=user)).order_by('-date_shipped_from_factory'))
        self.filterset = MachineFilter(self.request.GET, queryset)
        return self.filterset.qs


class PostMachineViewSet(viewsets.ModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = PostMachineSerializer
    permission_classes = [DjangoModelPermissions]


class SharedMachineViewSet(generics.ListAPIView, viewsets.ModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = SharedMachineSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['machine_serial_number']
