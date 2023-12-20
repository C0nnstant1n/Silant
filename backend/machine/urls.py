from django.urls import path, include
from rest_framework import routers
from .views import MachineViewSet, SharedMachineViewSet

router = routers.SimpleRouter()
router.register(r'machines', MachineViewSet, basename='machine')
router.register(r'shmachines', SharedMachineViewSet)

urlpatterns = [
    path('machines/', include(router.urls))
]
