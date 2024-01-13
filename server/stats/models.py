from django.db import models

class Player(models.Model):
    nickname = models.CharField(max_length=255, unique=False, null=True, blank=True)
    avatar = models.CharField(blank=True, null=True, max_length=500)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Stat(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    score = models.IntegerField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.player.username} :: score: {self.score}"