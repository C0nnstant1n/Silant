from rest_framework import viewsets, mixins
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import generics
from .filters import MachineFilter
from .serializer import GetMachineSerializer, SharedMachineSerializer, PostMachineSerializer
from .models import Machine
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q
from rest_framework.permissions import DjangoModelPermissions


class GetMachineViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    serializer_class = GetMachineSerializer
    permission_classes = [DjangoModelPermissions]

    def get_queryset(self):
        user = self.request.user
        group = user.groups.values_list('name', flat=True)
        if self.request.GET.get('ordered'):
            ordered = self.request.GET.get('ordered')

        else:
            ordered = '-date_shipped_from_factory'
        # print(user)
        # print(self.request.query_params)
        if 'Manager' in group:
            queryset = Machine.objects.all().order_by(ordered)
            self.filterset = MachineFilter(self.request.GET, queryset)
            return self.filterset.qs

        queryset = (Machine.objects.filter(Q(client__user=user) |
                                           Q(service_company__user=user)).order_by(ordered))
        self.filterset = MachineFilter(self.request.GET, queryset)
        return self.filterset.qs


class PostMachineViewSet(viewsets.ModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = PostMachineSerializer
    permission_classes = [DjangoModelPermissions]


class SharedMachineViewSet(generics.ListAPIView, viewsets.GenericViewSet, mixins.ListModelMixin):
    queryset = Machine.objects.all()
    serializer_class = SharedMachineSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['machine_serial_number']
