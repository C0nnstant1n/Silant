from django_filters import FilterSet
from .models import Machine


class MachineFilter(FilterSet):
    class Meta:
        model = Machine
        fields = {'machine_model',
                  'model_engine',
                  'model_transmission',
                  'model_drive_axle',
                  'steering_axle'}
