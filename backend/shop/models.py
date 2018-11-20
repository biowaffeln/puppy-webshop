from django.db import models
from django.conf import settings

class Puppy(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_url = models.CharField(max_length=200)
    age = models.IntegerField(null=True)
    weight = models.IntegerField(null=True)
    description = models.CharField(max_length=500, null=True)
    description_en = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.name

class Order(models.Model):
    total_price = models.DecimalField(max_digits=9, decimal_places=2)
    puppies = models.ManyToManyField(Puppy)
    date = models.DateTimeField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)
