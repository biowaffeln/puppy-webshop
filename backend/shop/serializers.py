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


class PuppyOrderSerializer(serializers.Serializer):
    puppy = serializers.ReadOnlyField(source='puppy.id')
    order = serializers.ReadOnlyField(source='order.id')

    class Meta:
        model = PuppyOrder
        fields = ('order', 'puppy', 'amount')


class OrderSerializer(serializers.ModelSerializer):
    total_price = serializers.ReadOnlyField()
    # puppies = PuppyOrderSerializer(source='puppyorder_set', many=True)
    date = serializers.ReadOnlyField()
    user = serializers.ReadOnlyField(source='user.username')

    def create(self, validated_data):
        print(validated_data)
        # puppies = validated_data.pop("puppies")
        puppies = validated_data.pop("puppies")
        print(puppies)
        order = Order.objects.create(**validated_data)
        total_price = 0
        for puppy in puppies:
            print(puppy)
            puppy_id = puppy.get("id")
            amount = puppy.get("amount")
            puppy_instance = Puppy.objects.get(pk=puppy_id)
            total_price += puppy_instance.price
            PuppyOrder(order=order, puppy=puppy_instance, amount=amount).save()
        print(order)
        order.save()
        return Order

    class Meta:
        model = Order
        fields = ('id', 'total_price', 'puppies', 'date', 'user')
