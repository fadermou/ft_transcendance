FROM python:3.8

WORKDIR /app

RUN apt update ; pip3 install django
COPY ./backend /app/
WORKDIR /app/

# RUN python manage.py makemigrations ; python manage.py migrate
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
# python manage.py runserver 0.0.0.0:8000
CMD ["tail", "-f"]