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
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework import routers

from Silant import logout
from complaints.urls import router as complaints_router
from maintenance.urls import router as maintenance_router
from machine.urls import router as machine_router

router = routers.DefaultRouter()
router.registry.extend(complaints_router.registry)
router.registry.extend(machine_router.registry)
router.registry.extend(maintenance_router.registry)
# router.register(r"handbooks", ServiceCompanyView, basename='handbooks')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('api/', include(router.urls)),
    path('api/swagger-ui/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('', include('handbooks.urls')),
    path('', include('setCookie.urls')),
    path('logout', logout.logout_view, name='logout')
]
