from django.urls import path
from .views import DoomListCreate, DoomRetrieveDestroy

urlpatterns = [
    path('doom1/', DoomListCreate.as_view(), name='doom-list-create'),
    path('doom2/<int:pk>/', DoomRetrieveDestroy.as_view(), name='doom-retrieve-destroy'),

]