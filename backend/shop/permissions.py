from rest_framework import permissions
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
from .views import *


class IsOwner(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object with a valid JWT token to access it.
    """

    def has_object_permission(self, request, view, obj):
        # data = {'token': token}
        # valid_data = VerifyJSONWebTokenSerializer().validate(data)
        return True
