class ConvertirLongitud:
    @staticmethod
    def metros_a_kilometros(metros):
        return metros / 1000

    @staticmethod
    def kilometros_a_metros(kilometros):
        return kilometros * 1000

def menu():
    while True:
        print("\n1. Metros a Kilómetros\n2. Kilómetros a Metros\n3. Salir")
        opcion = int(input("Elige una opción: "))
        if opcion == 1:
            metros = float(input("Ingresa la longitud en metros: "))
            print(f"{metros} metros = {ConvertirLongitud.metros_a_kilometros(metros)} kilómetros")
        elif opcion == 2:
            kilometros = float(input("Ingresa la longitud en kilómetros: "))
            print(f"{kilometros} kilómetros = {ConvertirLongitud.kilometros_a_metros(kilometros)} metros")
        elif opcion == 3:
            break
        else:
            print("Opción inválida.")
