from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404, HttpResponseRedirect
from shop.models import Puppy
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken


def index(request):
    return HttpResponse("Hello World!")

def puppies(request, puppy_id):
    try:
        puppy = Puppy.objects.get(pk=puppy_id)
        return JsonResponse({
        'id': puppy.id,
        'name': puppy.name,
        'price': puppy.price,
        'imageUrl': puppy.image_url,
        'description': {
            'DE': puppy.description_de,
            'EN': puppy.description_en
        },
        })
    except Puppy.DoesNotExist:
        raise Http404("No Puppy with this id found")

def all_puppies(request):
  puppies = Puppy.objects.all()
  data = [{
    'id': puppy.id,
    'name': puppy.name,
    'price': puppy.price,
    'imageUrl': puppy.image_url,
    'description': {
        'DE': puppy.description_de,
        'EN': puppy.description_en
    },
    } for puppy in puppies]
  return JsonResponse(data, safe=False)

@api_view(['GET'])
def current_user(request):
    """
    Ermittelt den aktuellen User anhand seines Tokens und gibt seine Daten zurück
    """
    serializer = UserSerializer(request.user)
    return response(serializer.data)


class UserList(APIView):
    """
    Erstellt einen neuen User.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
