package main

import "fmt"

func main() {
	// Definimos variables para los datos de entrada
	var a, b, c string
	var d, e int

	// Solicitamos los datos al usuario
	fmt.Print("Escriba sus nombres completos: ")
	fmt.Scanln(&a)

	fmt.Print("Escriba sus apellidos completos: ")
	fmt.Scanln(&b)

	fmt.Print("Escriba su profesion: ")
	fmt.Scanln(&c)

	fmt.Print("Escriba su año de nacimiento: ")
	fmt.Scanln(&d)

	// Calculamos la edad
	e = 2025 - d

	// Imprimimos el resultado
	fmt.Printf("El (La) %s %s %s tiene %d años\n", c, a, b, e)
}
