class Calculadora:
    def suma(self, a, b):
        return a + b

    def resta(self, a, b):
        return a - b

    def multiplicacion(self, a, b):
        return a * b

    def division(self, a, b):
        if b == 0:
            return "Error: No se puede dividir por cero"
        return a / b

def menu():
    calculadora = Calculadora()
    while True:
        print("\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir")
        opcion = int(input("Elige una opción: "))
        if opcion == 5:
            break
        num1 = float(input("Ingresa el primer número: "))
        num2 = float(input("Ingresa el segundo número: "))
        if opcion == 1:
            print("Resultado:", calculadora.suma(num1, num2))
        elif opcion == 2:
            print("Resultado:", calculadora.resta(num1, num2))
        elif opcion == 3:
            print("Resultado:", calculadora.multiplicacion(num1, num2))
        elif opcion == 4:
            print("Resultado:", calculadora.division(num1, num2))
        else:
            print("Opción inválida.")

