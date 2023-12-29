from django_filters import FilterSet
from .models import ComplaintsModel


class ComplaintFilter(FilterSet):
    class Meta:
        model = ComplaintsModel
        fields = {'failure_node',
                  'recovery_method',
                  'service_company',}
