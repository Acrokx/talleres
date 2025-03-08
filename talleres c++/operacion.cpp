#include <iostream>
using namespace std;

int main() {
    int A, B;  // Declaramos las variables A y B para los valores de entrada

    // Solicitar al usuario que ingrese los valores de A y B
    cout << "Ingrese valor para A: ";
    cin >> A;

    cout << "Ingrese valor para B: ";
    cin >> B;

    // Realizar las operaciones
    int suma = A + B;
    cout << "La suma de los numeros es: " << suma << endl;

    int res = A - B;
    cout << "La resta de los numeros es: " << res << endl;

    int multi = A * B;
    cout << "La multiplicacion de los numeros es: " << multi << endl;

    // Dividir, mostrando el resultado como float
    float div = static_cast<float>(A) / B;
    cout << "La division de los numeros es: " << div << endl;

    // Comparaciones
    bool igual = (A == B);
    cout << "Los numeros son iguales: " << igual << endl;

    bool mayor = (A > B);
    cout << "El numero mayor es: " << (mayor ? A : B) << endl;
    cout << "El numero menor es: " << (mayor ? B : A) << endl;

    return 0;
}
