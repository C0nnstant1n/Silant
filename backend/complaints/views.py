from rest_framework import viewsets
from django.db.models import Q
from machine.models import MachineModel
from .serializer import ComplaintsSerializer
from .models import ComplaintsModel


class ComplaintsViewSet(viewsets.ModelViewSet):
    serializer_class = ComplaintsSerializer

    def get_queryset(self):
        user = self.request.user
        group = user.groups.values_list('name', flat=True)
        queryset = ComplaintsModel.objects.filter(Q(machine__client=user) | Q(machine__service_company__user=user)).order_by('date_refusal')
        if 'Manager' in group:
            return ComplaintsModel.objects.all().order_by('date_refusal')
        return queryset
