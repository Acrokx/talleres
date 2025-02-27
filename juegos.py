import random

def juego_adivinanza():
    numero_secreto = random.randint(1, 100)
    intentos = 0

    while True:
        intento = int(input("Adivina el número entre 1 y 100: "))
        intentos += 1
        if intento < numero_secreto:
            print("El número es mayor.")
        elif intento > numero_secreto:
            print("El número es menor.")
        else:
            print(f"¡Felicidades! Adivinaste el número en {intentos} intentos.")
            break
