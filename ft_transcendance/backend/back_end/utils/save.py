from django.contrib.auth import login
from django.contrib.auth.models import User
from django.conf import settings

def save_and_login_user(request, user_data):
    username = user_data.get('login')
    email = user_data.get('email')
    user, created = User.objects.get_or_create(username=username)

    if created:
        user.save()

    login(request, user, settings.BACKEND)
    return
