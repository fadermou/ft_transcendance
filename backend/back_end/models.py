from django.db import models

# Create your models here.
# class Book(models.Model):
#     title = models.CharField(max_length=100)

# null: Determines whether the field can store a NULL value
# class Student(models.Model):
#     name = models.CharField(max_length=100)
#     age = models.IntegerField(null=True)

# choices: Provides a list of choices for the field
GENDER_CHOICES = [
    ('M', 'Male'),
    ('F', 'Female'),
    ('O', 'Other'),
]

class USER(models.Model):
    username = models.CharField(max_length=100)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    age = models.IntegerField(null=True)
    email = models.EmailField(("email address"))
    # email = models.EmailField(("email address"), unique=True)

    def __str__(self):
        return f"{self.username}"