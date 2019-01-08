from django.http import HttpResponse, JsonResponse, Http404, HttpResponseRedirect
from shop.models import Puppy, Order
from django.contrib.auth.models import User
from rest_framework import permissions, status, viewsets, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .serializers import UserSerializer, UserSerializerWithToken, OrderSerializer, PuppySerializer
from .permissions import IsOwner


def index(request):
    return HttpResponse("Hello World!")


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
    queryset = Order.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = OrderSerializer

    def get_queryset(self, *args, **kwargs):  # Necessary to filter for orders solely by requesting user!
        return Order.objects.all().filter(user=self.request.user)  # TODO: error when not logged in, Problem?

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwner,)
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PuppyList(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Puppy.objects.all()
    serializer_class = PuppySerializer


class PuppyDetail(generics.RetrieveAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Puppy.objects.all()
    serializer_class = PuppySerializer
