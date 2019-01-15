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


@api_view(['GET'])
def current_user(request):
    """
    Ermittelt den aktuellen User anhand seines Tokens und gibt seine Daten zurück.
    """
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


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
    http_method_names = ["get", "post"]
    queryset = Order.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = OrderSerializer

    def get_queryset(self):
        token = self.request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        data = {'token': token}
        try:
            valid_data = VerifyJSONWebTokenSerializer().validate(data)
            user = valid_data['user']
            self.request.user = user
        except ValidationError as v:
            print("validation error", v)
        print(self.request.user)
        if (self.request.user.is_anonymous):
            return None
        return Order.objects.all().filter(user=self.request.user)  # TODO: self.request.user aus Token holen

    def perform_create(self, serializer):
        token = self.request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        data = {'token': token}
        try:
            valid_data = VerifyJSONWebTokenSerializer().validate(data)
            user = valid_data['user']
            self.request.user = user
        except ValidationError as v:
            print("validation error", v)
        serializer.save(user=self.request.user)


class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    http_method_names = ["get", "post"]
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class UserList(generics.ListAPIView):
    http_method_names = ["get", "post"]
    queryset = User.objects.all().select_related('address')
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    http_method_names = ["get", "post"]
    queryset = User.objects.all().select_related('address')
    serializer_class = UserSerializer


class PuppyList(generics.ListAPIView):
    http_method_names = ["get"]
    permission_classes = (permissions.AllowAny,)
    queryset = Puppy.objects.all()
    serializer_class = PuppySerializer


class PuppyDetail(generics.RetrieveAPIView):
    http_method_names = ["get"]
    permission_classes = (permissions.AllowAny,)
    queryset = Puppy.objects.all()
    serializer_class = PuppySerializer
