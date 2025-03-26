# services/usuario_service.py
from database import usuarios
from models.usuarios import Usuario

def crear_usuario(nombre, email, password, rol):
    try:
        usuario = Usuario(nombre, email, password, rol)
        usuarios.insert_one(usuario.to_dict())
        print("Usuario creado correctamente.")
    except Exception as e:
        print(f"Error al crear usuario: {e}")

def buscar_usuario(email):
    try:
        return usuarios.find_one({"email": email})
    except Exception as e:
        print(f"Error al buscar usuario: {e}")
        return None

def login(email, password):
    try:
        usuario = buscar_usuario(email)
        if usuario and usuario["password"] == password:
            print("Login exitoso.")
            return usuario
        else:
            print("Credenciales incorrectas.")
            return None
    except Exception as e:
        print(f"Error durante el login: {e}")
        return None
