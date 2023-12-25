from django.urls import path, include
from rest_framework import routers
from .views import GetMachineViewSet, SharedMachineViewSet, PostMachineViewSet

router = routers.SimpleRouter()
router.register(r'machines', GetMachineViewSet, basename='machines')
router.register(r'post_machines', PostMachineViewSet, basename='post_machines')
router.register(r'shmachines', SharedMachineViewSet, basename='shmachines')

# urlpatterns = [
#     path('machines/', include(router.urls))
# ]
