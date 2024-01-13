from django.contrib.auth import get_user_model
from rest_framework import serializers

from ..models import Stat, Player


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('id', 'nickname', 'avatar')


class StatSerializer(serializers.ModelSerializer):
    player = PlayerSerializer()

    class Meta:
        model = Stat
        fields = ('id', 'player', 'score', 'created_at')