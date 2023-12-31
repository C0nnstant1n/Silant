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

router = routers.SimpleRouter()
router.register(r'machine_model', MachineModelView, basename='machine_model')
router.register(r'engine', EngineView, basename='engine')
router.register(r'transmission', TransmissionView, basename='transmission')
router.register(r'drive_axle', DriveAxleView, basename='drive_axle')
router.register(r'steering_axle', SteeringAxleView, basename='steering_axle')
router.register(r'type_of_maintenance', TypeOfMaintenanceView, basename='type_of_maintenance')
router.register(r'recovery_method', RecoveryMethodView, basename='recovery_method')
router.register(r'service_company', ServiceCompanyView, basename='service_company')
router.register(r'client', ClientView, basename='client')
router.register(r'failures', NatureOfFailureView, basename='failures')

urlpatterns = [
    path('', index, name='index'),
    path('api/handbooks/', include(router.urls))
]


