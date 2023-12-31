from rest_framework import viewsets
from django.db.models import Q
from rest_framework.permissions import DjangoModelPermissions

from .filters import ComplaintFilter
from .serializer import GetComplaintsSerializer, SetComplaintsModelSerializer
from .models import ComplaintsModel


class GetComplaintsViewSet(viewsets.ModelViewSet):
    serializer_class = GetComplaintsSerializer
    permission_classes = [DjangoModelPermissions]

    def get_queryset(self):
        user = self.request.user
        group = user.groups.values_list('name', flat=True)
        if self.request.GET.get('ordered'):
            ordered = self.request.GET.get('ordered')
        else:
            ordered = 'date_refusal'

        if 'Manager' in group:
            queryset = ComplaintsModel.objects.all().order_by(ordered)
            self.fiterset = ComplaintFilter(self.request.GET, queryset)
            return self.fiterset.qs
        queryset = ComplaintsModel.objects.filter(
            Q(machine__client__user=user) | Q(machine__service_company__user=user)).order_by(ordered)
        self.fiterset = ComplaintFilter(self.request.GET, queryset)
        return self.fiterset.qs


class SetComplaintsViewSet(viewsets.ModelViewSet):
    queryset = ComplaintsModel.objects.all()
    serializer_class = SetComplaintsModelSerializer
    permission_classes = [DjangoModelPermissions]