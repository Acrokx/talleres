class personaje:
    def __init__(self, nombre, salud):
        self.nombre = nombre
        self.salud = salud

    def recibir_danio(self, danio):
        self.salud -= danio
        print(f"{self.nombre} ha recibido {cantidad} puntos de daño: {self.salud}")
        
        