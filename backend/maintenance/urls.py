from rest_framework import routers
from .views import GetMaintenanceViewSet, SetMaintenanceViewSet

router = routers.SimpleRouter()
router.register(r'maintenance', GetMaintenanceViewSet, basename='maintenance')
router.register(r'set_maintenance', SetMaintenanceViewSet, basename='set_maintenance')
