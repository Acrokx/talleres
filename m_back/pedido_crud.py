from bson import ObjectId
from datetime import datetime
from mongo_conexion import obtener_db

def obtener_pedidos():
    db = obtener_db()
    return list(db.pedidos.aggregate([
        {"$lookup": {
            "from": "detalles_pedido",
            "localField": "_id",
            "foreignField": "pedidoId",
            "as": "detalles"
        }}
    ]))

def obtener_pedido_por_id(id):
    db = obtener_db()
    pedidos = list(db.pedidos.aggregate([
        {"$match": {"_id": ObjectId(id)}},
        {"$lookup": {
            "from": "detalles_pedido",
            "localField": "_id",
            "foreignField": "pedidoId",
            "as": "detalles"
        }}
    ]))
    return pedidos[0] if pedidos else None

def crear_pedido(pedido, detalles):
    db = obtener_db()
    pedido['fechaPedido'] = datetime.now()  # Fecha de creación del pedido
    resultado = db.pedidos.insert_one(pedido)  # Insertar el pedido en la colección
    pedido_id = resultado.inserted_id  # Obtener el ID del pedido insertado

    # Actualizar los detalles del pedido con el ID del pedido
    for d in detalles:
        d['pedidoId'] = pedido_id
    
    # Insertar los detalles del pedido
    db.detalles_pedido.insert_many(detalles)

    # Retornar el pedido con sus detalles
    return obtener_pedido_por_id(pedido_id)

def actualizar_estado_pedido(id, estado):
    db = obtener_db()
    db.pedidos.update_one({"_id": ObjectId(id)}, {"$set": {"estado": estado}})

    # Retornar el pedido actualizado
    return obtener_pedido_por_id(id)

def cancelar_pedido(id):
    # Cancelar un pedido, cambiando su estado a "CANCELADO"
    return actualizar_estado_pedido(id, "CANCELADO")
