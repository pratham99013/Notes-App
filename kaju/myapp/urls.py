from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('', getRoutes),
    path('admin/', admin.site.urls),
    path('notes/create/', createNote, name = "create"),
    path('notes/', getNotes, name = "notes"),
    path('notes/<str:pk>/', getNote, name = "note"),
    path('notes/<str:pk>/update/', updateNote, name = "update"),
  
    path('notes/<str:pk>/delete/', DeleteNote, name = "delete"),
    ]