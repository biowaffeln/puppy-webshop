from django.db import models

# Puppy class rasse und name.
class Puppy(models.Model):
    rasse = models.CharField(max_length=30)
    name = models.CharField(max_length=30)
    alter = models.IntegerField(2)
    gewicht = models.IntegerField(2)


#class Order(models.Model):
 #   id = models.IntegerField(5)
  #  totalPrice = models.DecimalField(max_digits=100)
   # date = models.DateTimeField(4)
    #UserId = models.IntegerField(8)


