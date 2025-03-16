package main

import "fmt"

func main() {
    // Lista de nombres
    nombres := []string{"Lopez", "Sara", "Pablo", "Cesar"}

    // Imprimir los nombres
    for _, nombre := range nombres {
        fmt.Println(nombre)
    }

    // Diccionarios (mapas en Go)
    personas := []map[string]interface{}{
        {"nombre": "Lopez", "Edad": 45},
        {"nombre": "Sara", "Edad": 11},
        {"nombre": "Pablo", "Edad": 32},
        {"nombre": "Cesar", "Edad": 39},
    }

    // Imprimir los datos del diccionario
    for _, persona := range personas {
        fmt.Printf("Nombre: %s, Edad: %d\n", persona["nombre"], persona["Edad"])
    }
}
