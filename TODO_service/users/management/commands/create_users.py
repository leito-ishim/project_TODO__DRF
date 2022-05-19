import json

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
from users.models import User


def load_from_json(file_name):
    with open(file_name, mode='r', encoding='utf-8') as infile:
        return json.load(infile)


class Command(BaseCommand):
    def handle(self, *args, **options):
        users = load_from_json('users/fixtures/users.json')
        User.objects.all().delete()
        for user in users:
            us = user.get('fields')
            us['id'] = user.get('pk')
            new_user = User(**us)
            new_user.save()


        superuser = get_user_model()
        if not superuser.objects.filter(username='admin').exists():
            superuser.objects.create_superuser(username='admin',
                                          email='',
                                          password='admin')
