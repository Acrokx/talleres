class Estudiante:
    def __init__(self, nombre, edad, calificaciones):
        self.nombre = nombre
        self.edad = edad
        self.calificaciones = calificaciones

    def promedio(self):
        return sum(self.calificaciones) / len(self.calificaciones)

def crear_estudiante():
    nombre = input("Nombre del estudiante: ")
    edad = int(input("Edad del estudiante: "))
    calificaciones = list(map(float, input("Ingresa las calificaciones separadas por espacio: ").split()))
    return Estudiante(nombre, edad, calificaciones)

def mostrar_promedio(estudiante):
    print(f"Promedio de {estudiante.nombre}: {estudiante.promedio()}")

estudiante1 = crear_estudiante()
mostrar_promedio(estudiante1)
