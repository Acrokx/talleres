class Tarea:
    def __init__(self, nombre, prioridad):
        self.nombre = nombre
        self.prioridad = prioridad

    def __str__(self):
        return f"{self.nombre} (Prioridad: {self.prioridad})"

def agregar_tarea():
    nombre = input("Nombre de la tarea: ")
    prioridad = input("Prioridad (Alta, Media, Baja): ")
    return Tarea(nombre, prioridad)

def mostrar_tareas(tareas):
    for tarea in tareas:
        print(tarea)

tareas = []
while True:
    print("\n1. Agregar tarea\n2. Mostrar tareas\n3. Salir")
    opcion = int(input("Elige una opción: "))
    if opcion == 1:
        tareas.append(agregar_tarea())
    elif opcion == 2:
        mostrar_tareas(tareas)
    elif opcion == 3:
        break
    else:
        print("Opción inválida.")
