from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField('Имя пользователя', max_length=64)
    first_name = models.CharField('Имя', max_length=64)
    last_name = models.CharField('Фамилия', max_length=64)
    email = models.EmailField('Электронная почта', max_length=64, unique=True)
    birthday_year = models.PositiveIntegerField('Год рождения', null=True)



