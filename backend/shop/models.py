from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Puppy(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_url = models.CharField(max_length=200)
    age = models.IntegerField(null=True)
    weight = models.IntegerField(null=True)
    description_de = models.CharField(max_length=500, null=True)
    description_en = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    puppies = models.ManyToManyField(Puppy, through='PuppyOrder')
    date = models.DateTimeField(auto_now_add=True, blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='orders')

    def __str__(self):
        return str(self.id)


class PuppyOrder(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    puppy = models.ForeignKey(Puppy, on_delete=models.CASCADE)
    amount = models.IntegerField()
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return str(self.id)


class Address(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    country = models.CharField(max_length=30, blank=True)
    street = models.CharField(max_length=30, blank=True)
    zip = models.CharField(max_length=10, blank=True)
    city = models.CharField(max_length=30, blank=True)


@receiver(post_save, sender=User)
def create_user_address(sender, instance, created, **kwargs):
    if created:
        Address.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_address(sender, instance, **kwargs):
    instance.address.save()
