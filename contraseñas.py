import random
import string

class GeneradorContraseña:
    @staticmethod
    def generar(longitud=8):
        caracteres = string.ascii_letters + string.digits + string.punctuation
        return ''.join(random.choice(caracteres) for _ in range(longitud))

print("Contraseña generada:", GeneradorContraseña.generar(12))
