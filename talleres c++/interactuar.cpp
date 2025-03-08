#include <iostream>
#include <string>
using namespace std;

int main() {
    string a, b, c;  // Declaración de variables para nombres, apellidos y profesión
    int d, e;         // Declaración de variables para el año de nacimiento y la edad
    
    // Solicitar al usuario que ingrese sus datos
    cout << "Escriba sus nombres completos: ";
    getline(cin, a);  // Usamos getline para permitir espacios en los nombres

    cout << "Escriba sus apellidos completos: ";
    getline(cin, b);  // Usamos getline para permitir espacios en los apellidos

    cout << "Escriba su profesion: ";
    getline(cin, c);  // Usamos getline para permitir espacios en la profesión

    cout << "Escriba su año de nacimiento: ";
    cin >> d;  // Leer el año de nacimiento

    // Calcular la edad
    e = 2025 - d;

    // Mostrar el resultado
    cout << "El (La) " << c << " " << a << " " << b << " tiene " << e << " años." << endl;

    return 0;
}
