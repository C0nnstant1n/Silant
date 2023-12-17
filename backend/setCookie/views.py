from django.http import HttpResponse
from django.shortcuts import redirect


def set_cookie(request):
    response = redirect('http://127.0.0.1:3000')
    response.set_cookie("username", request.user.username)
    return response
