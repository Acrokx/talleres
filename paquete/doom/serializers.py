from rest_framework import serializers
from .models import DoomModel

class DoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoomModel
        fields = ['id_producto', 'nombre', 'descripcion', 'precio', 'fecha_creacion']
