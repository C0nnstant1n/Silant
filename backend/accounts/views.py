from django.http import HttpResponse
from django.shortcuts import redirect
from django.http import JsonResponse


# def set_cookie(request):
#     response = redirect('http://127.0.0.1:3000/service/info')
#     response.set_cookie("username", request.user.username)
#     return response


def get_user(request):

    if request.user.is_authenticated:

        companies = request.user.servicecompany_set.values_list('name')
        group = request.user.groups.values_list('name')

        current_user = {
            'user': request.user.username,
            'username': request.user.first_name + ' ' + request.user.last_name,
            # 'group': request.user.groups.values_list('name')[0][0],
        }
        if companies:
            current_user.update({'company': companies[0][0]})

        if group:
            current_user.update({'group': group[0][0]})
        # print(current_user)
        return JsonResponse(current_user)

    return HttpResponse('false')
