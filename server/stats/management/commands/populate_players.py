from django.core.management.base import BaseCommand
import requests

from stats.models import Player

class Command(BaseCommand):
    help = 'Populates demo players'

    def handle(self, *args, **options):

        api_res = requests.get('https://randomuser.me/api/?results=10').json()
        players = []
        for user in api_res['results']:
            players.append(
                Player(
                    nickname=f"{user['name']['title']} {user['name']['first']} {user['name']['last']}",
                    avatar=user['picture']['large']
                    )
                )

        Player.objects.bulk_create(players)
        self.stdout.write(self.style.SUCCESS('Successfully added %s players' % len(players)))
