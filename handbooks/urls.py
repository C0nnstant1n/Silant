"""
URL configuration for Silant project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls.py import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls.py'))
"""

from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'equipment', EquipmentView, basename='equipment')
router.register(r'engine', EngineView, basename='engine')
router.register(r'transmission', TransmissionView, basename='transmission')
router.register(r'steering_axle', SteeringAxleView, basename='steering axle')
router.register(r'type_of_maintenance', TypeOfMaintenanceView, basename='type of maintenance')
router.register(r'recovery_method', RecoveryMethodView, basename='recovery method')
router.register(r'service_company', ServiceCompanyView, basename='service company')


urlpatterns = [
    path('handbooks/', include(router.urls)),
]
