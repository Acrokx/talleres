package main

import "fmt"

func main() {
	// Definir la lista (slice) de strings
	Lista := []string{"Lunes", "Martes", "Miercoles", "Jueves", "viernes", "sabado"}

	// Imprimir el valor en la posición 4 (equivalente a Lista[4] en Python)
	fmt.Println(Lista[4]) // Traerá el dato según la posición en la lista comenzando en cero

	// Imprimir la lista completa
	fmt.Println(Lista) // Traerá la lista completa de datos

	// Imprimir un subrango de la lista (equivalente a Lista[0:3] en Python)
	fmt.Println(Lista[0:3])

	// Definir una lista mixta con diferentes tipos de datos
	ListaMixta := []interface{}{"Lunes", "Martes", "Miercoles", "Jueves", "viernes", "sabado", 1, 2, 3, []interface{}{"Cristhian", 0.2, 2.25, true}}

	// Imprimir el subrango de la lista de los primeros 4 elementos
	fmt.Println(ListaMixta[0:4])

	// Imprimir el contenido de la sublista (índice 9) y sus primeros 3 elementos
	// El subíndice de la sublista debe ser tratado como un slice también
	sublista := ListaMixta[9].([]interface{}) // Convertir la sublista a tipo 'interface{}' de nuevo
	fmt.Println(sublista[0:3]) // Acceder a los primeros 3 elementos de la sublista
}
