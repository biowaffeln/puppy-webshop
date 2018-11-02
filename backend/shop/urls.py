from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('puppies/<int:puppy_id>/', views.puppies, name='puppies'),
    path('puppies/all', views.all_puppies, name='all_puppies'),
]
