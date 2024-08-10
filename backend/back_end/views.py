from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.forms import AuthenticationForm
from . import models

def homepage(request):
    if (models.USER.objects.all().count() < 2):
        user0 = AuthenticationForm.username
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

# def loginpage(request):
#     form = AuthenticationForm(request, data=request.POST or None)
#     next_url = request.GET.get('next', '')
    
#     if form.is_valid():
#         # Perform login logic
#         return redirect(next_url or '/')

#     return render(request, 'login.html', {'form': form, 'next': next_url})

# def js(request):
#     return render(request, 'Node.js')


