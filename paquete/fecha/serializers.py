from rest_framework import serializers
from .models import fechamodel

class fechaSerializer(serializers.ModelSerializer):
    class Meta:
        model = fechamodel
        fields = ['id_producto', 'nombre', 'descripcion', 'fecha_inicio', 'fecha_fin']