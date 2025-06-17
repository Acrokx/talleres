from django.urls import path
from .views import (
    DataSetCreateList,
    DataSetUpdateDelete,
)

urlpatterns = [
    path('one/', DataSetCreateList.as_view(), name='usuario_list'),
    path('two/<int:pk>/', DataSetUpdateDelete.as_view(), name='usuario_detail'),
]
