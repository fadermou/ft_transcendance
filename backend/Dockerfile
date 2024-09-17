FROM python:3.8

WORKDIR /app

RUN apt update -y ; apt upgrade -y ; pip3 install django ; pip install all ; pip install django-allauth ; pip install requests ;pip install --upgrade pip ;pip install PyJWT ; pip install cryptography ;\
pip install social-auth-app-django ; pip install psycopg2-binary 

COPY ./backend /app/

RUN pip freeze > requirements.txt

WORKDIR /app/

# RUN python manage.py makemigrations ; python manage.py migrate
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
# python manage.py runserver 0.0.0.0:8000
CMD ["tail", "-f"]