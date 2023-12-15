from django.urls import path, include
from rest_framework import routers
from .views import ComplaintsViewSet

router = routers.SimpleRouter()
router.register(r'complaints', ComplaintsViewSet, basename='complaints')
