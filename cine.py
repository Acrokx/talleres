class Cine:
    def __init__(self, nombre, total_entradas, precio_entrada):
        self.nombre = nombre
        self.total_entradas = total_entradas
        self.precio_entrada = precio_entrada
        self.entradas_vendidas = 0

    def vender_entradas(self, cantidad):
        if cantidad <= 0:
            return "La cantidad de entradas debe ser mayor a cero."
        if cantidad > self.total_entradas - self.entradas_vendidas:
            return "No hay suficientes entradas disponibles."
        self.entradas_vendidas += cantidad
        return f"Se han vendido {cantidad} entradas."

    def mostrar_estado(self):
        print(f"Película: {self.nombre}")
        print(f"Entradas disponibles: {self.total_entradas - self.entradas_vendidas}")
        print(f"Precio de la entrada: ${self.precio_entrada}")
        print(f"Entradas vendidas: {self.entradas_vendidas}")

    def calcular_total_ventas(self):
        return self.entradas_vendidas * self.precio_entrada

# Uso del sistema
cine = Cine("Avatar 2", 100, 12)

# Venta de entradas
print(cine.vender_entradas(50))  # Vende 50 entradas
cine.mostrar_estado()

# Venta de más entradas
print(cine.vender_entradas(60))  # Intenta vender más entradas de las disponibles
cine.mostrar_estado()

# Total de ventas
print(f"Total de ventas: ${cine.calcular_total_ventas()}")


