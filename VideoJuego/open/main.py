from personajes.guerrero import Guerrero
from personajes.mago import Mago
from items.espada import Espada
from items.conjuro import Conjuro

# crear personajes
guerrero = Guerrero("Throrg", 50)
hechicero = hechicero("Merlin", 50)

# crear objetos
espada = Espada("Espada de valor", 50)
conjuro = Conjuro("Bola de fuego", 30)

# equipar objetos
guerrero.equipar_arma(espada)
hechicero.aprender_conjuro(conjuro)

# acciones del juego
guerrero.atacar(hechicero)
hechicero.lanzar_conjuro(guerrero)
