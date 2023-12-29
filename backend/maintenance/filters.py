from django_filters import FilterSet
from .models import MaintenanceModel


class MaintenanceFilterSet(FilterSet):
    class Meta:
        model = MaintenanceModel
        fields = {'maintenance_type',
                  'machine',
                  'service_company'}
