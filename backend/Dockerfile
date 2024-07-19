FROM python:3.8

WORKDIR /app

RUN pip3 install django
COPY ./backend /app/
WORKDIR /app/
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
# CMD ["tail", "-f"]