from django.urls import path, include
from rest_framework import routers
from .views import MaintenanceViewSet

router = routers.DefaultRouter()
router.register(r'complaints', MaintenanceViewSet, basename='complaints')

urlpatterns = [
    path('maintenance/', include(router.urls))
]
