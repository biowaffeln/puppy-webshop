from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from .models import Order, Puppy, PuppyOrder


class UserSerializer(serializers.ModelSerializer):
    orders = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'orders')


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')


class PuppySerializer(serializers.ModelSerializer):
    description = serializers.SerializerMethodField()

    def get_description(self, puppy):
        return {'DE': puppy.description_de, 'EN': puppy.description_en}

    class Meta:
        model = Puppy
        fields = ('id', 'name', 'price', 'image_url', 'age', 'weight', 'description')


class PuppyOrderSerializer(serializers.ModelSerializer):
    puppy = serializers.ReadOnlyField(source='order.puppy')
    order = serializers.ReadOnlyField(source='order.order')

    class Meta:
        model = PuppyOrder
        fields = ('id', 'puppy', 'order', 'amount')


class OrderSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    puppies = PuppyOrderSerializer(source='puppyorder_set', many=True)

    class Meta:
        model = Order
        fields = ('id', 'total_price', 'puppies', 'date', 'user')
