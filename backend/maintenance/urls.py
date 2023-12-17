from rest_framework import routers
from .views import MaintenanceViewSet

router = routers.SimpleRouter()
router.register(r'maintenance', MaintenanceViewSet, basename='maintenance')
