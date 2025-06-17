from django.db import models


# Create your models here.
class DoomModel(models.Model):
    id_producto = models.CharField(max_length=100, primary_key=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(max_length=20)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nombre}"