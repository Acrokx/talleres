#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Definición de los vectores
    vector<int> a = {1, 2, 3, 4, 5};
    vector<int> b = {6, 7, 8, 9, 10};
    vector<int> c;

    // Multiplicación de los elementos de 'a' y 'b'
    for (size_t contador = 0; contador < a.size(); ++contador) {
        c.push_back(a[contador] * b[contador]);
    }

    // Imprimir el resultado de la multiplicación
    cout << "Resultado de multiplicación de a y b: ";
    for (int val : c) {
        cout << val << " ";
    }
    cout << endl;

    // Funciones

    // Definición y llamada de función
    auto mostrar_texto = []() {
        cout << "Hola" << endl;
    };

    mostrar_texto();

    // Función que multiplica dos números
    auto multiplicar = []() {
        int a = 7;
        int b = 9;
        cout << a * b << endl;
    };

    multiplicar();

    // Ámbito de las variables
    int a = 7, b = 9;
    auto multiplicar2 = [a, b]() { // Captura las variables a y b por valor
        cout << a * b << endl;
    };

    multiplicar2();

    // Función que devuelve un valor y luego se manipula en la variable fuera de la función
    auto multiplicar3 = []() -> int {
        int a = 7;
        int b = 9;
        return a * b;
    };

    int Resultado = multiplicar3();
    cout << Resultado + 5 << endl;

    // Función que valida un dato
    auto validar_dato = []() -> bool {
        int a = 9;
        if (a == 7) {
            return true;
        } else {
            return false;
        }
    };

    bool dato = validar_dato();
    cout << (dato ? "true" : "false") << endl;

    return 0;
}
