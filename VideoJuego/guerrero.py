from personaje import Personaje

class Guerrero(Personaje):
    def __init__(self, nombre, salud):
        super().__init__(nombre, salud)
        self.arma = None

    def equipar_arma(self, arma):
        self.arma = arma
        print(f"{self.nombre} ha equipado {arma.nombre}")

    def atacar(self, objetivo):
        if self.arma is not None:
            print(f"{self.nombre} ataca a {objetivo.nombre} con {self.arma.nombre}")
            objetivo.recibir_danio(self.arma.danio)
        else:
            print(f"{self.nombre} no tiene un arma equipada")