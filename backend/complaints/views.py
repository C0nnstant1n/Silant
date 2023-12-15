from rest_framework import viewsets
from .serializer import ComplaintsSerializer
from .models import ComplaintsModel


class ComplaintsViewSet(viewsets.ModelViewSet):
    queryset = ComplaintsModel.objects.all()
    serializer_class = ComplaintsSerializer

