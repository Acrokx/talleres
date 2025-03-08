#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    // Creación del "diccionario" con std::map
    map<string, string> coche;

    // Inicializando los valores
    coche["marca"] = "Mustang";
    coche["color"] = "plateado";
    coche["modelo"] = "inglish";
    coche["placa"] = "SNA025";

    // Imprimir el valor de 'color'
    cout << "Color: " << coche["color"] << endl;

    // Cambiar el valor de 'color'
    coche["color"] = "verde";
    cout << "Nuevo color: " << coche["color"] << endl;

    // Imprimir el valor de 'marca'
    cout << "Marca: " << coche["marca"] << endl;

    // Cambiar el valor de 'marca'
    coche["marca"] = "Mazda";
    cout << "Nueva marca: " << coche["marca"] << endl;

    // Imprimir todo el "diccionario"
    cout << "Coche: " << endl;
    for (const auto& pair : coche) {
        cout << pair.first << ": " << pair.second << endl;
    }

    return 0;
}
