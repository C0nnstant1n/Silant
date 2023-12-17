from django.contrib.auth import logout
from django.shortcuts import redirect


def logout_view(request):
    logout(request)
    response = redirect('http://127.0.0.1:3000')
    response.set_cookie("username", "undefined")
    return response
