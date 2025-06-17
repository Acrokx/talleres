from rest_framework import generics
from .models import fechamodel
from .serializers import fechaSerializer

class fechaListCreate(generics.ListCreateAPIView):
    queryset = fechamodel.objects.all()
    serializer_class = fechaSerializer

class fechaRetrieveDestroy(generics.RetrieveDestroyAPIView):
    queryset = fechamodel.objects.all()
    serializer_class = fechaSerializer