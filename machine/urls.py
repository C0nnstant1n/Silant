from django.urls import path, include
from rest_framework import routers
from .views import MachineViewSet

router = routers.DefaultRouter()
router.register(r'machines', MachineViewSet)

urlpatterns = [
    path('machines/', include(router.urls))
]
