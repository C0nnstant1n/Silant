from rest_framework import viewsets
from django.db.models import Q
from rest_framework.permissions import DjangoModelPermissions
from .serializer import GetComplaintsSerializer, SetComplaintsModelSerializer
from .models import ComplaintsModel


class GetComplaintsViewSet(viewsets.ModelViewSet):
    serializer_class = GetComplaintsSerializer
    permission_classes = [DjangoModelPermissions]

    def get_queryset(self):

        user = self.request.user
        group = user.groups.values_list('name', flat=True)

        if 'Manager' in group:
            return ComplaintsModel.objects.all().order_by('date_refusal')
        queryset = ComplaintsModel.objects.filter(
            Q(machine__client__user=user) | Q(machine__service_company__user=user)).order_by('date_refusal')
        return queryset


class SetComplaintsViewSet(viewsets.ModelViewSet):
    queryset = ComplaintsModel.objects.all()
    serializer_class = SetComplaintsModelSerializer
    permission_classes = [DjangoModelPermissions]