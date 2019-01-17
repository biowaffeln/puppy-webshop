from rest_framework import permissions
from .views import *


class IsOwner(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object with a valid JWT token to access it.
    """

    def has_object_permission(self, request, view, obj):
        return obj.user == get_request_user_and_validate_token(self)
