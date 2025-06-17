from rest_framework import generics
from .models import DataSet
from .serializers import DataSetSerializer

class DataSetCreateList(generics.ListCreateAPIView):
    queryset = DataSet.objects.all()
    serializer_class = DataSetSerializer 

class DataSetUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = DataSet.objects.all()
    serializer_class = DataSetSerializer
