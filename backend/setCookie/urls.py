from django.urls import path
from .views import set_cookie, get_user

urlpatterns = [
    path('s/', set_cookie, name='set_cookie'),
    path('isAuthenticated/', get_user, name='get_user')
]
