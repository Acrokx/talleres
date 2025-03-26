from personajes.personaje import Personaje

class Hechicero(Personaje):
    def __init__(self, nombre, vida):
        super().__init__(nombre, vida)
        self.conjuros = []
    
    def aprender_conjuro(self, conjuro):
        self.conjuros.append(conjuro)
        print(f"{self.nombre} ha aprendido el conjuro {conjuro.nombre}")

    def lanzar_conjuro(self, objetivo):
        if len(self.conjuros) == 0:
            conjuro = self.conjuros[0]
            print(f"{self.nombre} lanza {conjuro.nombre}")
            objetivo.recibir_danio(conjuro.poder)
        else:
            print(f"{self.nombre} no tiene conjuros para lanzar")
            
       
    