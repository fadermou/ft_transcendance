from django.shortcuts import render
import requests
from allauth.socialaccount.providers.oauth2.views import OAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
# from allauth.socialaccount.views import SocialLoginView
from dj_rest_auth.registration.views import SocialLoginView
from django.conf import settings
from dj_rest_auth.registration.views import APIView
from rest_framework.response import Response
from django.db import models
from django.contrib.auth.models import User

from django.contrib.auth.models import User

class Intra42OAuth2Adapter(OAuth2Adapter):
    provider_id = '42intra'
    access_token_url = 'https://api.intra.42.fr/oauth/token'
    authorize_url = 'https://api.intra.42.fr/oauth/authorize'
    profile_url = 'https://api.intra.42.fr/v2/me'  # To get user info after login


class Intra42Login(SocialLoginView):
    adapter_class = Intra42OAuth2Adapter
    client_class = OAuth2Client
    callback_url = settings.REDIRECT_URI

def sign_up(request):
        return render(request, 'login.html')

class callback_view(APIView):
    def get(self, request):
        code = request.query_params.get('code')
        print("Authorization Code:", code)
        if not code:
            return Response({"error": "Authorization code not provided"}, status=400)
        token_url = 'https://api.intra.42.fr/oauth/token'
        data = {
            'grant_type': 'authorization_code',
            'client_id': settings.FORTY_TWO_CLIENT_ID,
            'client_secret': settings.FORTY_TWO_CLIENT_SECRET,
            'code': code,
            'redirect_uri': settings.REDIRECT_URI,
        }
        response = requests.post(token_url, data=data)
        print("response", response.content)
        if response.status_code != 200:
            return Response({"error": "Failed to obtain access token"}, status=response.status_code)
        access_token = response.json().get('access_token')
        return Response({"access_token": access_token})
# Create your views here.
