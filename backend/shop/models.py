from django.db import models

class Puppy(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_url = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Order(models.Model):
    totalPrice = models.DecimalField(max_digits=100, decimal_places=2)
    date = models.DateTimeField(4)
    UserId = models.IntegerField(8)

    def __str__(self):
        return self.id
