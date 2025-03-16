package main

import "fmt"

func main() {
	// Crear un mapa similar al diccionario de Python
	coche := map[string]string{
		"marca":  "Mustang",
		"color":  "plateado",
		"modelo": "inglish",
		"placa": "SNA025",
	}

	// Imprimir el valor de 'color'
	fmt.Println(coche["color"])

	// Cambiar el valor de 'color'
	coche["color"] = "verde"
	fmt.Println(coche["color"])

	// Imprimir el valor de 'marca'
	fmt.Println(coche["marca"])

	// Cambiar el valor de 'marca'
	coche["marca"] = "Mazda"
	fmt.Println(coche["marca"])

	// Imprimir todo el mapa
	fmt.Println(coche)
}
