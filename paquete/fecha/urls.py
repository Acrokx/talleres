from django.urls import path
from .views import fechaListCreate, fechaRetrieveDestroy

urlpatterns = [
    path('fecha/', fechaListCreate.as_view(), name='fecha-list-create'),
    path('fecha/<int:pk>/', fechaRetrieveDestroy.as_view(), name='fecha-retrieve-destroy'),

]