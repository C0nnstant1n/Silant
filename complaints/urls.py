from django.urls import path, include
from rest_framework import routers
from .views import ComplaintsViewSet

router = routers.DefaultRouter()
router.register(r'complaints', ComplaintsViewSet, basename='complaints')

urlpatterns = [
    path('complaints/', include(router.urls))
]