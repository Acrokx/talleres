from pymongo import MongoClient

def obtener_db():
    # Asegúrate de colocar el URI correcto de MongoDB Atlas, incluyendo el nombre de usuario y la contraseña.
    url = "mongodb+srv://acroxmen:12345@cluster0.3b7zair.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    
    # Conectamos con la base de datos usando el URI
    cliente = MongoClient(url)
    
    # Regresamos la base de datos "tiendavirtual"
    return cliente["tiendavirtual"]
