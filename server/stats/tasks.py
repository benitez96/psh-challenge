from random import randint
from celery import shared_task

from .models import Stat, Player

@shared_task
def insert_scores():

    stats = []
    for player in Player.objects.all():
        for _ in range(10):
            stats.append(Stat(player=player, score=randint(0, 100)))

    Stat.objects.bulk_create(stats)