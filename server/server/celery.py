import os

from celery import Celery
from django.conf import settings

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings")
os.environ.setdefault("DJANGO_CONFIGURATION", "Dev")

import configurations

configurations.setup()

app = Celery("server")

app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)

from django_celery_beat.models import IntervalSchedule, PeriodicTask

day_schedule, created = IntervalSchedule.objects.get_or_create(
    period=IntervalSchedule.MINUTES,
    every=5
)

PeriodicTask.objects.get_or_create(
    name="Periodic task for insert scores",
    interval=day_schedule,
    task="stats.tasks.insert_scores"
)