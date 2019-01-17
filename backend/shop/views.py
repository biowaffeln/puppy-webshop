from shop.models import Puppy, Order
from django.contrib.auth.models import User
from rest_framework import permissions, status, viewsets, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.exceptions import ValidationError
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
from .serializers import UserSerializer, UserSerializerWithToken, OrderSerializer, PuppySerializer
from .permissions import IsOwner


# class UserList(APIView):
#     """
#     Erstellt einen neuen User.
#     """
#
#     permission_classes = (permissions.AllowAny,)
#
#     def post(self, request, format=None):
#         serializer = UserSerializerWithToken(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'orders': reverse('order-list', request=request, format=format),
        'puppies': reverse('puppy-list', request=request, format=format),
    })


class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    permission_classes = (IsOwner,)
    serializer_class = OrderSerializer

    def get_queryset(self):
        if self.request.user is None or self.request.user.is_anonymous:
            self.request.user = get_request_user_and_validate_token(self)
        return Order.objects.all().filter(user=self.request.user)

    def perform_create(self, serializer):
        if self.request.user is None or self.request.user.is_anonymous:
            self.reqest.user = get_request_user_and_validate_token(self)
        if serializer.is_valid():
            print('Creating new order...')
            serializer.create(user=self.request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderDetail(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def get_queryset(self):
        if self.request.user is None or self.request.user.is_anonymous:
            self.request.user = get_request_user_and_validate_token(self)
        return Order.objects.all().filter(user=self.request.user)


class UserList(generics.ListAPIView):
    queryset = User.objects.all().select_related('address')
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
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


def get_request_user_and_validate_token(self):
    print(self.request.user)
    token = self.request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
    data = {'token': token}
    try:
        valid_data = VerifyJSONWebTokenSerializer().validate(data)
        print(valid_data['user'])
        return valid_data['user']
    except ValidationError as v:
        print("validation error", v)
