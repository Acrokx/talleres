#include <iostream>
#include <string>
using namespace std;

int main() {
    // Primer bloque de código (a == 2)
    int a = 2;
    if (a == 2) {
        cout << "a vale 2" << endl;
    } else {
        cout << "a es diferente de 2" << endl;
    }

    // Segundo bloque de código (Concatenar condiciones)
    string Nombre = "Cristhian";
    int Edad = 32;
    string Pais = "Colombia";

    if (Nombre == "Cristhian" && Edad == 32 && Pais == "Colombia") {
        cout << "Su nombre es " << Nombre << " tiene " << Edad << " y es de " << Pais << endl;
    } else if (Nombre == "Cristhian" && !(Edad == 32)) {
        cout << "Su nombre es Cristhian y no tiene 32 años" << endl;
    } else if (Nombre != "Cristhian" && Edad == 32) {
        cout << "Su nombre no es Cristhian y tiene 32 años" << endl;
    } else {
        cout << "No se llama Cristhian ni tiene 32 años" << endl;
    }

    return 0;
}
