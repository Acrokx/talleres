class Temperatura:
    @staticmethod
    def celsius_a_fahrenheit(celsius):
        return (celsius * 9/5) + 32

    @staticmethod
    def fahrenheit_a_celsius(fahrenheit):
        return (fahrenheit - 32) * 5/9

def menu():
    while True:
        print("\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius\n3. Salir")
        opcion = int(input("Elige una opción: "))
        if opcion == 1:
            celsius = float(input("Ingresa la temperatura en Celsius: "))
            print(f"{celsius}°C = {Temperatura.celsius_a_fahrenheit(celsius)}°F")
        elif opcion == 2:
            fahrenheit = float(input("Ingresa la temperatura en Fahrenheit: "))
            print(f"{fahrenheit}°F = {Temperatura.fahrenheit_a_celsius(fahrenheit)}°C")
        elif opcion == 3:
            break
        else:
            print("Opción inválida.")
