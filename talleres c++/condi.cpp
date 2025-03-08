#include <iostream>
using namespace std;

int main() {
    int Figura;
    double Pi = 3.1416;
    int const_val = 2;
    double Area;

    // Solicitar la figura
    cout << "Seleccione la figura a calcular su area: \n";
    cout << "1 para rombo\n";
    cout << "2 para rectangulo\n";
    cout << "3 para cuadrado\n";
    cout << "4 para trapecio\n";
    cout << "Ingrese el numero de la figura: ";
    cin >> Figura;

    switch (Figura) {
        case 1:
            {
                double Dmayor, Dmenor;
                cout << "Ingrese el valor de la diagonal mayor: ";
                cin >> Dmayor;
                cout << "Ingrese el valor de la diagonal menor: ";
                cin >> Dmenor;
                Area = (Dmayor + Dmenor / const_val);
                cout << "El area del rombo es: " << Area << endl;
                break;
            }
        case 2:
            {
                double Largo, Ancho;
                cout << "Ingrese el valor del largo del rectangulo: ";
                cin >> Largo;
                cout << "Ingrese el valor del ancho del rectangulo: ";
                cin >> Ancho;
                Area = Largo * Ancho;
                cout << "El area del rectangulo es: " << Area << endl;
                break;
            }
        case 3:
            {
                double Lado;
                cout << "Ingrese el valor del lado del cuadrado: ";
                cin >> Lado;
                Area = Lado * Lado;
                cout << "El area del cuadrado es: " << Area << endl;
                break;
            }
        case 4:
            {
                double Bmayor, Bmenor, H;
                cout << "Ingrese el valor de la base mayor: ";
                cin >> Bmayor;
                cout << "Ingrese el valor de la base menor: ";
                cin >> Bmenor;
                cout << "Ingrese la altura del trapecio: ";
                cin >> H;
                Area = ((Bmayor + Bmenor) * H) / 2;
                cout << "El area del trapecio es: " << Area << endl;
                break;
            }
        case 5: // Caso para la figura que no coincide
            {
                double A;
                cout << "Ingrese el valor de A: ";
                cin >> A;
                Area = A * Pi;
                cout << "El area es: " << Area << endl;
                break;
            }
        default:
            cout << "Opcion no valida." << endl;
            break;
    }

    return 0;
}
