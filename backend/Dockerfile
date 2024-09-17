FROM python:3.8

WORKDIR /app

RUN apt update -y ; apt upgrade -y ; pip install django; pip install --upgrade pip ;pip install all;\
pip install django-allauth requests PyJWT  cryptography social-auth-app-django psycopg2-binary dj-rest-auth djangorestframework-simplejwt social-auth-core

COPY ./backend /app/

RUN pip freeze > requirements.txt

WORKDIR /app/

# RUN python manage.py makemigrations ; python manage.py migrate
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
# python manage.py runserver 0.0.0.0:8000

CMD ["tail", "-f"]