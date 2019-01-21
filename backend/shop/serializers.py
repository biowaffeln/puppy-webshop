from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Order, Puppy, PuppyOrder, Address


class AddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = Address
        fields = ('country', 'street', 'zip', 'city')


class UserSerializer(serializers.ModelSerializer):
    address = AddressSerializer()

    class Meta:
        model = User
        read_only_fields = ('orders',)
        fields = ('id', 'username', 'orders', 'address')


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
