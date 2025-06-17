from rest_framework import generics
from .models import DoomModel
from .serializers import DoomSerializer

class DoomListCreate(generics.ListCreateAPIView):
    queryset = DoomModel.objects.all()
    serializer_class = DoomSerializer

class DoomRetrieveDestroy(generics.RetrieveDestroyAPIView):
    queryset = DoomModel.objects.all()
    serializer_class = DoomSerializer
