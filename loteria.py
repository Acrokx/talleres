import random

def simular_loteria():
    numeros_ganadores = random.sample(range(1, 51), 5)
    print("Números ganadores:", numeros_ganadores)
    apuesta = list(map(int, input("Apuesta tus 5 números (separados por espacio): ").split()))
    aciertos = len(set(apuesta) & set(numeros_ganadores))
    print(f"Tienes {aciertos} aciertos.")

simular_loteria()
