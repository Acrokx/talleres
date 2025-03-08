#include <iostream>
using namespace std;

int main() {
    int Voltaje, Resistencia;
    float Intensidad;  // Utilizamos float para que la intensidad sea un número decimal

    // Solicitar al usuario los valores del voltaje y la resistencia
    cout << "Ingrese el valor del voltaje del circuito: ";
    cin >> Voltaje;

    cout << "Ingrese el valor de la resistencia del circuito: ";
    cin >> Resistencia;

    // Calcular la intensidad (amperaje)
    Intensidad = static_cast<float>(Voltaje) / Resistencia;

    // Mostrar el resultado
    cout << "Al conectar un resistor de R " << Resistencia << " ohm a una fuente de V " << Voltaje
         << " voltaje circulará una corriente de " << Intensidad << " amperios" << endl;

    return 0;
}
