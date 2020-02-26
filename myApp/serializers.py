# from django.conf.urls import url, include
from .models import Post
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('__all__')
            