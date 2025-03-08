#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    // Crear un vector de cadenas de texto para los días de la semana
    vector<string> Lista = {"Lunes", "Martes", "Miercoles", "Jueves", "viernes", "sabado"};
    
    // Mostrar el elemento en la posición 4
    cout << "Elemento en la posición 4: " << Lista[4] << endl;

    // Mostrar la lista completa
    cout << "Lista completa: ";
    for (const auto& dia : Lista) {
        cout << dia << " ";
    }
    cout << endl;

    // Mostrar los elementos del índice 0 al 2 (corte de lista)
    cout << "Elementos del índice 0 al 2: ";
    for (int i = 0; i < 3; ++i) {
        cout << Lista[i] << " ";
    }
    cout << endl;

    // Usar un vector de enteros junto con el vector de cadenas
    vector<variant<string, int, vector<variant<string, double, double, bool>>>> ListaCompleta = {
        "Lunes", "Martes", "Miercoles", "Jueves", "viernes", "sabado", 1, 2, 3, {"Cristhian", 0.2, 2.25, true}
    };

    // Mostrar los primeros 4 elementos de la lista
    cout << "Primeros 4 elementos de la lista completa: ";
    for (int i = 0; i < 4; ++i) {
        cout << get<string>(ListaCompleta[i]) << " ";
    }
    cout << endl;

    // Mostrar algunos elementos del subvector (el último subvector de "Cristhian", 0.2, etc.)
    cout << "Elementos del subvector: ";
    auto subvector = get<vector<variant<string, double, double, bool>>>(ListaCompleta[9]);
    for (int i = 0; i < 3; ++i) {
        cout << get<string>(subvector[i]) << " ";
    }
    cout << endl;

    return 0;
}

      
