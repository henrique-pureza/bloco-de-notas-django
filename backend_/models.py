from django.db.models import Model, CharField, TextField

class Nota(Model):
    titulo = CharField(max_length=100, primary_key=True)
    nota = TextField()

    def __str__(self):
        return self.titulo
