from rest_framework import viewsets
from .serializer import MachineSerializer
from .models import MachineModel
# from django.contrib.auth.signals import user_logged_in
# from django.dispatch import receiver
#
#
# @receiver(user_logged_in)
# def send_user(sender, user, request, **kwargs):

#     print(user, request)


class MachineViewSet(viewsets.ModelViewSet):
    queryset = MachineModel.objects.all()
    serializer_class = MachineSerializer
