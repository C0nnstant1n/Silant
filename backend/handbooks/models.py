from django.db import models
from django.contrib.auth.models import User

class MachineModel(models.Model):
    name = models.TextField(max_length=256)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"


class ModelOfEngine(models.Model):
    name = models.TextField(max_length=256)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"


class ModelOfTransmission(models.Model):
    name = models.TextField(max_length=256)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"


class ModelOfDriveAxle(models.Model):
    name = models.TextField(max_length=256)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"


class ModelOfSteeringAxle(models.Model):
    name = models.TextField(max_length=256)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"


class TypeOfMaintenance(models.Model):
    name = models.TextField(max_length=256)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"


class NatureOfFailure(models.Model):
    name = models.TextField(max_length=256)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"


class RecoveryMethod(models.Model):
    name = models.TextField(max_length=256)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"


class ServiceCompany(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.TextField(max_length=256)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"


class Client(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=256)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"