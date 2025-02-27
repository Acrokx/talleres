class Pelicula:
    def __init__(self, nombre, genero, calificacion):
        self.nombre = nombre
        self.genero = genero
        self.calificacion = calificacion

    def __str__(self):
        return f"{self.nombre} ({self.genero}) - Calificación: {self.calificacion}"

class SistemaPeliculas:
    def __init__(self):
        self.peliculas = []

    def agregar_pelicula(self, nombre, genero, calificacion):
        pelicula = Pelicula(nombre, genero, calificacion)
        self.peliculas.append(pelicula)

    def peliculas_buenas(self):
        return [p for p in self.peliculas if p.calificacion >= 8]

    def peliculas_genero(self, genero):
        return [p for p in self.peliculas if p.genero.lower() == genero.lower()]

    def mostrar_peliculas(self):
        if not self.peliculas:
            print("No hay películas registradas.")
        else:
            for pelicula in self.peliculas:
                print(pelicula)

# Uso del sistema
sistema = SistemaPeliculas()
sistema.agregar_pelicula("Inception", "Ciencia Ficción", 9)
sistema.agregar_pelicula("Titanic", "Romántico", 7)
sistema.agregar_pelicula("The Dark Knight", "Acción", 10)
sistema.agregar_pelicula("La La Land", "Romántico", 8)

print("\nPelículas buenas:")
for pelicula in sistema.peliculas_buenas():
    print(pelicula)

print("\nPelículas de género Romántico:")
for pelicula in sistema.peliculas_genero("Romántico"):
    print(pelicula)

sistema.mostrar_peliculas()
