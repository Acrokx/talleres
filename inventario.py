class Producto:
    def __init__(self, nombre, precio, cantidad):
        self.nombre = nombre
        self.precio = precio
        self.cantidad = cantidad

    def ajustar_cantidad(self, cantidad):
        self.cantidad += cantidad
        return self.cantidad

productos = []

def agregar_producto():
    nombre = input("Nombre del producto: ")
    precio = float(input("Precio del producto: "))
    cantidad = int(input("Cantidad en inventario: "))
    producto = Producto(nombre, precio, cantidad)
    productos.append(producto)

def mostrar_inventario():
    for producto in productos:
        print(f"Producto: {producto.nombre}, Precio: {producto.precio}, Cantidad: {producto.cantidad}")

agregar_producto()
mostrar_inventario()
