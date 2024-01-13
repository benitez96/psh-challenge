from rest_framework import generics

from .serializers import *
from ..models import *

class StatsView(generics.ListAPIView):

    serializer_class = StatSerializer
    queryset = Stat.objects.prefetch_related('player').all()


    def get_queryset(self):
        return self.queryset.order_by('-score')[:10]