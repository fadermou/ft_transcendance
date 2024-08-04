from django.shortcuts import render
from django.http import JsonResponse

def homepage(request):
    data = { 
        'name': 'Ferdaous',
        'age': 20,
        'city': 'Marrakech'

    }
    return render(request, 'home.html', context=data)

# def js(request):
#     return render(request, 'Node.js')

