from django.db.models import Q
from rest_framework import viewsets
from rest_framework.permissions import DjangoModelPermissions

from .filters import MaintenanceFilterSet
from .serializer import GetMaintenanceSerializer, SetMaintenanceSerializer
from .models import MaintenanceModel


class GetMaintenanceViewSet(viewsets.ModelViewSet):
    serializer_class = GetMaintenanceSerializer
    permission_classes = [DjangoModelPermissions]

    def get_queryset(self):
        user = self.request.user
        group = user.groups.values_list('name', flat=True)
        if 'Manager' in group:
            queryset = MaintenanceModel.objects.all().order_by('maintenance_date')
            self.filterset = MaintenanceFilterSet(self.request.GET, queryset)
            return self.filterset.qs

        queryset = (MaintenanceModel.objects.
                    filter(Q(machine__client__user=user) | Q(machine__service_company__user=user)).
                    order_by('-maintenance_date'))
        self.filterset = MaintenanceFilterSet(self.request.GET, queryset)
        return self.filterset.qs


class SetMaintenanceViewSet(viewsets.ModelViewSet):
    queryset = MaintenanceModel.objects.all()
    serializer_class = SetMaintenanceSerializer
    permission_classes = [DjangoModelPermissions]
