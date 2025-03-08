#include <iostream>
#include <vector>
#include <string>

using namespace std;

// Definir una estructura para las personas
struct Persona {
    string nombre;
    int edad;
};

int main() {
    // Mostrar los nombres (equivalente a la lista de nombres en Python)
    vector<string> nombres = {"Lopez", "Sara", "Pablo", "Cesar \n\n"};
    for (const string& nombre : nombres) {
        cout << nombre << endl;
    }

    // Crear un vector de personas (equivalente a la lista de diccionarios en Python)
    vector<Persona> personas;

    // Agregar personas a la lista
    personas.push_back({"Lopez", 45});
    personas.push_back({"Sara", 11});
    personas.push_back({"Pablo", 32});
    personas.push_back({"Cesar", 39});

    // Mostrar los nombres y edades de las personas
    for (const Persona& persona : personas) {
        cout << persona.nombre << " " << persona.edad << endl;
    }

    return 0;
}
