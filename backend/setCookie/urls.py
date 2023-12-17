from django.urls import path
from .views import set_cookie

urlpatterns = [
    path('s/', set_cookie, name='set_cookie')
]
