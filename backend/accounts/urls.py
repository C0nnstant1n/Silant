from django.urls import path
from .views import get_user

urlpatterns = [

    path('get_user/', get_user, name='get_user')
]

# path('s/', set_cookie, name='set_cookie'),
