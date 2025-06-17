from rest_framework import serializers
from .models import DataSet
import numpy as np

class DataSetSerializer(serializers.ModelSerializer):
    media = serializers.SerializerMethodField()
    desviacion_estandar = serializers.SerializerMethodField()

    class Meta:
        model = DataSet
        fields = ['id', 'nombre', 'valores', 'media', 'desviacion_estandar']

    def get_media(self, obj):
        arr = np.array(obj.valores)
        return arr.mean()
    
    def get_desviacion_estandar(self, obj):
        arr = np.array(obj.valores)
        return arr.std()    
    
        


