package main

import "fmt"

func main() {
	// Primer bloque condicional
	a := 2
	if a == 2 {
		fmt.Println("a vale 2")
	} else {
		fmt.Println("a es diferente de 2")
	}

	// Concatenación de condiciones
	Nombre := "Cristhian"
	Edad := 32
	Pais := "Colombia"

	if Nombre == "Cristhian" && Edad == 32 && Pais == "Colombia" {
		fmt.Printf("Su nombre es %s, tiene %d años y es de %s\n", Nombre, Edad, Pais)
	} else if Nombre == "Cristhian" && !(Edad == 32) {
		fmt.Println("Su nombre es Cristhian y no tiene 32 años")
	} else if Nombre != "Cristhian" && Edad == 32 {
		fmt.Println("Su nombre no es Cristhian y tiene 32 años")
	} else {
		fmt.Println("No se llama Cristhian ni tiene 32 años")
	}
}
