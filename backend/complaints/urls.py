from django.urls import path, include
from rest_framework import routers
from .views import GetComplaintsViewSet, SetComplaintsViewSet

router = routers.SimpleRouter()
router.register(r'complaints', GetComplaintsViewSet, basename='complaints')
router.register(r'set_complaint', SetComplaintsViewSet, basename='set_complaint')
