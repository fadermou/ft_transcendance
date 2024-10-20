FROM python:latest

RUN apt update -y ; apt upgrade -y ; pip install django; pip install --upgrade pip \
;pip install django-allauth requests dj-rest-auth djangorestframework-simplejwt django-cors-headers\
; apt-get update && apt-get install -y postgresql-client 

WORKDIR /app/backend

COPY requirements.txt /app/backend
# COPY manage.py .
# RUN python manage.py migrate

RUN pip install --no-cache-dir -r requirements.txt

CMD ["tail", "-f"]
# CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000"]
