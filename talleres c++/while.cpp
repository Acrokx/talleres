#include <iostream>
using namespace std;

int main() {
    // Contador simple
    int Contador = 0;
    while (Contador < 30) {
        Contador += 1;
        cout << "iteracion " << Contador << endl;
    }

    // Combinado con if else
    int a;
    while (true) {
        cout << "introduzca un valor mayor a 10: ";
        cin >> a;  // Leer entrada del usuario
        if (a > 10) {
            cout << "Es correcto" << endl;
        } else {
            cout << "Es incorrecto, pruebe de nuevo" << endl;
            break;  // Salir del bucle si la condición es incorrecta
        }
    }

    return 0;
}
