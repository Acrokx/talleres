from pymongo import MongoClient

# URI de conexión
uri = "mongodb+srv://acroxmen:mon12345@clientes.gfru1g5.mongodb.net/?retryWrites=true&w=majority&appName=clientes"

# Conexión
cliente = MongoClient(uri)

# Base de datos y colección
db = cliente["clientes_mongo"]
coleccion = db["clientes"]

# Limpiar colección
coleccion.delete_many({})

# Insertar datos
clientes_data = [
    {"nombre": "Ana Gómez", "ciudad": "Madrid", "compras": [100, 200, 150]},
    {"nombre": "Luis Fernández", "ciudad": "Barcelona", "compras": [300]},
    {"nombre": "Marta López", "ciudad": "Valencia", "compras": [50, 75, 120, 60]}
]

coleccion.insert_many(clientes_data)

# Consultar
resultado = coleccion.find({
    "compras.2": { "$exists": True }
})

print("Clientes con más de 2 compras:")
for doc in resultado:
    print(f"- {doc['nombre']} ({len(doc['compras'])} compras)")

# Cerrar conexión
cliente.close()
