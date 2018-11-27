from django.urls import path

from . import views
from django.urls import path
from .views import current_user, UserList

urlpatterns = [
    path('', views.index, name='index'),
    path('puppies/<int:puppy_id>/', views.puppies, name='puppies'),
    path('puppies/all', views.all_puppies, name='all_puppies'),
    path('current_user/', current_user),
    path('users/', UserList.as_view())

]
