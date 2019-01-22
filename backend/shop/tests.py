"""Max"""
from django.test import TestCase, RequestFactory
from django.test import Client
from django.contrib.auth.models import User
from rest_framework.test import APIRequestFactory
from rest_framework.test import APITestCase
from django.http import HttpRequest
from django.test import SimpleTestCase
from django.urls import reverse
from rest_framework import status


from .models import Puppy

"""Test ob man ein puppy erstellen kann und ob es dann auch existiert"""
class ModelsPuppyTestCase(TestCase):
    def setUp(self):
        Puppy.objects.create(name="Niklas", price="200", age="1", weight="3")

    def testPuppyExist(self):
        welpe = Puppy.objects.get(name="Niklas")
        self.assertEqual(welpe.name, "Niklas")
        self.assertEqual(welpe.price, 200)
        self.assertEqual(welpe.age, 1)
        self.assertEqual(welpe.weight, 3)


"""Der Test Erstellt einen Nutzer und prüft dann ob der name und die Email Stimmen. 
    Kein Passwort Test möglich, da diese nicht gespeichert werden/verschlüsselt sind """
class UserTest(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        self.user = User.objects.create_user(
            username="hacker123", email="heuzeroth@hdm-stuttgart.de", password="Password")

    def testIfUserExist(self):
        unserTestUser = User.objects.get(username="hacker123")
        self.assertEqual(unserTestUser.email, "heuzeroth@hdm-stuttgart.de")
        self.assertEqual(unserTestUser.username, "hacker123")



"""HttpRequest Test auf /token-auth, da man dort kein 200 Statuscode 
    als nicht eingeloggter Nutzer zurückbekommen sollte"""
class httpRequestTest(APITestCase):
    def test_url_root(self):

        factory = APIRequestFactory()
        response = factory.get('/token-auth')
        self.assertNotEqual(response, status.HTTP_200_OK)

