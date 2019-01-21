from shop.models import Puppy, Order, Address
from django.contrib.auth.models import User
from rest_framework import permissions, status, viewsets, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .serializers import UserSerializer, OrderSerializer, PuppySerializer, AddressSerializer


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'orders': reverse('order-list', request=request, format=format),
        'puppies': reverse('puppy-list', request=request, format=format),
    })


class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = OrderSerializer

    def get_queryset(self):
        return Order.objects.all().filter(user=self.request.user)

    def perform_create(self, serializer):
        print('Creating new order...')
        serializer.save(puppies_data=self.request.data, user=self.request.user)
        return Response(serializer.data)


class OrderDetail(generics.RetrieveAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def get_queryset(self):
        return Order.objects.all().filter(user=self.request.user)


class UserList(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.all().filter(id=self.request.user.id, username=self.request.user).select_related('address')


class UserDetail(generics.RetrieveAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = User.objects.all().select_related('address')
    serializer_class = UserSerializer


class PuppyList(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Puppy.objects.all()
    serializer_class = PuppySerializer


class PuppyDetail(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Puppy.objects.all()
    serializer_class = PuppySerializer


class AddressList(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = AddressSerializer

    def get_queryset(self):
        return Address.objects.all().filter(user=self.request.user)
