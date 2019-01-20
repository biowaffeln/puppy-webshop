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


class PuppyOrderCreateSerializer(serializers.Serializer):
    puppy = serializers.PrimaryKeyRelatedField(queryset=Puppy.objects.all())
    amount = serializers.IntegerField()
    price = serializers.DecimalField(max_digits=6, decimal_places=2)


class PuppyOrderSerializer(serializers.ModelSerializer):
    puppy = serializers.PrimaryKeyRelatedField(read_only=True)
    amount = serializers.IntegerField(read_only=True)
    price = serializers.DecimalField(max_digits=6, decimal_places=2, read_only=True)

    class Meta:
        model = PuppyOrder
        fields = ('puppy', 'amount', 'price')


class OrderSerializer(serializers.ModelSerializer):
    puppies_data = PuppyOrderCreateSerializer(many=True, read_only=True)
    puppies = PuppyOrderSerializer(source='puppyorder_set', many=True, read_only=True)
    date = serializers.ReadOnlyField()
    user = serializers.ReadOnlyField(source='user.username')

    def create(self, validated_data):
        puppies_data = list(validated_data.pop("puppies_data").values())
        order = Order.objects.create(**validated_data)
        for puppy in puppies_data[0]:
            puppy_id = puppy.get("id")
            amount = puppy.get("amount")
            puppy_instance = Puppy.objects.get(pk=puppy_id)
            price = puppy_instance.price
            PuppyOrder(order=order, puppy=puppy_instance, amount=amount, price=price).save()
        return order

    class Meta:
        model = Order
        read_only_fields = ('puppies',)
        fields = ('id', 'puppies', 'puppies_data', 'date', 'user')
