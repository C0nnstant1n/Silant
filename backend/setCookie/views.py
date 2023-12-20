from django.http import HttpResponse
from django.shortcuts import redirect


def set_cookie(request):
    response = redirect('http://127.0.0.1:3000/service')
    response.set_cookie("username", request.user.username)
    return response


def get_user(request):
    print('get_user', request.user.username)
    if request.user.is_authenticated:
        return HttpResponse('true')

    return HttpResponse('false')
