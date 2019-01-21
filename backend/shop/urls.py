from django.urls import path
from .views import UserList, OrderList, OrderDetail, PuppyList, PuppyDetail, api_root, AddressList
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = format_suffix_patterns([
    path('', api_root),
    path('puppies/', PuppyList.as_view(), name='puppy-list'),
    path('puppies/<int:pk>/', PuppyDetail.as_view(), name='puppy-detail'),
    path('users/', UserList.as_view(), name='user-list'),
    path('orders/', OrderList.as_view(), name='order-list'),
    path('orders/<int:pk>', OrderDetail.as_view(), name='order-detail'),
    path('address/', AddressList.as_view(), name='adress-list'),
])
