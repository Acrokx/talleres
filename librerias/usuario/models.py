from django.db import models

# Create your models here.
class DataSet(models.Model):
    nombre = models.CharField(max_length=100)
    valores = models.JSONField() # guardamos los valores como un JSON
    
    def __str__(self):
        return self.nombre