FROM python:3.8

# WORKDIR /app

RUN apt update -y ; apt upgrade -y ; pip install django; pip install --upgrade pip ;pip install django-allauth requests dj-rest-auth djangorestframework-simplejwt
# ;pip install all;; pip install requests PyJWT  cryptography social-auth-app-django psycopg2-binary dj-rest-auth djangorestframework-simplejwt social-auth-core ;\
# apt install sqlite3
# ; pip install sqlite3

# COPY ./backend /app/


WORKDIR /app/

CMD ["tail", "-f"]