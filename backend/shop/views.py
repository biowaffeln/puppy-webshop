from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from shop.models import Puppy 

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
    } for puppy in puppies]
  return JsonResponse(data, safe=False)
