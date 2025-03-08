#include <iostream>
#include <cmath> // Para usar pow() para la potenciación
using namespace std;

int main() {
    int A, C;
    
    // Solicitar el primer valor
    cout << "Por favor ingrese el primer valor: ";
    cin >> A;

    // Solicitar el segundo valor
    cout << "Por favor ingrese el segundo valor: ";
    cin >> C;

    // Calcular la potencia
    int valor = pow(A, C);  // Usamos la función pow() de la librería <cmath>
    
    // Mostrar el resultado
    cout << "La potencia de " << A << " sobre " << C << " es: " << valor << endl;

    return 0;
}
