from django.shortcuts import render

def homepage(request):
    return render(request, 'home.html')


# def homepage(request):
#     return render(request, 'home.html')
# Create your views here.
