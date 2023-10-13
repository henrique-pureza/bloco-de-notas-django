from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Nota
from .serializers import NotaSerializer
from django.shortcuts import render

class NotaListCreateView(ListCreateAPIView):
    queryset = Nota.objects.all()
    serializer_class = NotaSerializer

class NotaRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Nota.objects.all()
    serializer_class = NotaSerializer
    lookup_field = 'titulo'

class AppView:
    def index(request):
        return render(request, "index.html")

    def new(request):
        return render(request, "new.html")

    def show(request):
        return render(request, "show.html")

    def edit(request):
        return render(request, "edit.html")
