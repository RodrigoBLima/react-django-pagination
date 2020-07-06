from django.shortcuts import render
from .models import Post
# Create your views here.
from rest_framework import viewsets, status
from .serializers import PostSerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class CustomPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 1000

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'page_size': self.page_size,
            'results': data
        })

class Index(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = CustomPagination

    def create(self, request):
        print('create')
        serializer = PostSerializer(data=request.data)
        print(serializer)
        serializer.is_valid(raise_exception=True)
        post = serializer.save()

        post.save()

        headers = self.get_success_headers(serializer.data)

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

        # return Response(serializer.data)

    def destroy(self, request, pk=None):
        pass


    def update(self, request, pk=None):
        pass