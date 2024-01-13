from django.urls import path, include, re_path

from .views import StatsView

urlpatterns = [
    path('stats/', StatsView.as_view()),
]