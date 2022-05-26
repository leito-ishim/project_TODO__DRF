from django.db import models

# Create your models here.
from users.models import User


class Project(models.Model):
    name = models.CharField('Название проекта', max_length=128)
    link_to_reposity = models.CharField('Ссылка на репозиторий', max_length=512)
    users = models.ManyToManyField(User)


class TODO(models.Model):
    project = models.ForeignKey(Project, verbose_name='Проект', on_delete=models.CASCADE)
    text = models.TextField(verbose_name='Текст заметки')
    create_timestamp = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    update_timestamp = models.DateTimeField(auto_now=True, verbose_name='Дата последнего обновления')
    author_user = models.OneToOneField(User, auto_created=True, verbose_name='Автор заметки', on_delete=models.CASCADE)
    is_active = models.BooleanField(verbose_name='Активна', default=True)
