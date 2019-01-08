from django.urls import path
from .views import current_user, UserList, UserDetail, OrderList, OrderDetail, PuppyList, PuppyDetail, api_root
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = format_suffix_patterns([
    path('', api_root),
    path('puppies/', PuppyList.as_view(), name='puppy-list'),
    path('puppies/<int:pk>/', PuppyDetail.as_view(), name='puppy-detail'),
    path('current_user/', current_user),
    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('orders/', OrderList.as_view(), name='order-list'),
    path('orders/<int:pk>', OrderDetail.as_view(), name='order-detail'),
])
