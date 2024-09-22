from django.shortcuts import render ,redirect
import requests , json, os
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
from django.http import JsonResponse


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
def home(request):
        return render(request, 'home.html')

class callback_viewM(APIView):
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
        if response.status_code == 401:  # Unauthorized (token might be invalid/expired)
            return Response({"error": "Access token expired or invalid. Please authenticate again."}, status=401)
        if response.status_code != 200:
            return Response({"error": "Failed to obtain access token"}, status=response.status_code)
        access_token = response.json().get('access_token')
        
        return Response({"access_token": access_token})
    


class callback_view(APIView):
    def get(self, request):
        code = request.query_params.get('code')
        # print("Authorization Code:", code)
        if not code:
            return Response({"error": "Authorization code not provided"}, status=400)

        # Get access token
        token_url = 'https://api.intra.42.fr/oauth/token'
        token_data = {
            'grant_type': 'authorization_code',
            'client_id': settings.FORTY_TWO_CLIENT_ID,
            'client_secret': settings.FORTY_TWO_CLIENT_SECRET,
            'code': code,
            'redirect_uri': settings.REDIRECT_URI,
        }
        token_response = requests.post(token_url, data=token_data)
        print("Token response:", token_response.content)

        if token_response.status_code == 401:
            return Response({"error": "Access token expired or invalid. Please authenticate again."}, status=401)
        if token_response.status_code != 200:
            return Response({"error": "Failed to obtain access token"}, status=token_response.status_code)

        access_token = token_response.json().get('access_token')

        # Use the access token to get user data
        headers = {'Authorization': f'Bearer {access_token}'}
        user_response = requests.get(Intra42OAuth2Adapter.profile_url, headers=headers)

        if user_response.status_code != 200:
            return Response({"error": "Failed to fetch user data"}, status=user_response.status_code)
        redirect('home/')

        user_data = user_response.json()

        processed_data = {
            'id': user_data.get('id'),
            'email': user_data.get('email'),
            'login': user_data.get('login'),
            'first_name': user_data.get('first_name'),
            'last_name': user_data.get('last_name'),
        }
        json_file_path = os.path.join(settings.BASE_DIR, 'user_data.json')  # Adjust path as needed
        with open(json_file_path, 'w') as json_file:
            json.dump(user_data, json_file)
        # print(processed_data)
        return redirect('/home/')
        # return Response(user_response.json())
