FROM python:latest

# WORKDIR /app

RUN apt update -y ; apt upgrade -y ; pip install django; pip install --upgrade pip \
;pip install django-allauth requests dj-rest-auth djangorestframework-simplejwt 

WORKDIR /app/backend


# CMD ["tail", "-f"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]