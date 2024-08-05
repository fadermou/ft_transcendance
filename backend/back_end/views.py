from django.shortcuts import render
from django.http import JsonResponse
from . import models
def homepage(request):
    if (models.USER.objects.all().count() < 2):
        user = models.USER(username="hajar", gender="F", age=20, email="salam")
        user1 = models.USER(username="ferdaous", gender="F", age=20, email="hhhh")
        user.save()
        user1.save()
    data = { 
        'name': 'Ferdaous',
        'age': 20,
        'city': 'Marrakech'

    }
    return render(request, 'home.html', context={'data': data})
    # return render(request, 'home.html', context=data)

# def js(request):
#     return render(request, 'Node.js')

