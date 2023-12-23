from django.db.models import Q
from rest_framework import viewsets
from .serializer import MaintenanceSerializer
from .models import MaintenanceModel


class MaintenanceViewSet(viewsets.ModelViewSet):
    queryset = MaintenanceModel.objects.all()
    serializer_class = MaintenanceSerializer

    def get_queryset(self):
        user = self.request.user
        group = user.groups.values_list('name', flat=True)
        queryset = (MaintenanceModel.objects.
                    filter(Q(machine__client=user) | Q(machine__service_company__user=user)).
                    order_by('-maintenance_date'))
        if 'Manager' in group:
            return MaintenanceModel.objects.all().order_by('-maintenance_date')
        print(queryset)
        return queryset
