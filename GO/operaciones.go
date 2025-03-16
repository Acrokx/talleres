package main

import "fmt"

func main() {
	// Definir las variables para los valores de entrada
	var A, B int

	// Solicitar los valores al usuario
	fmt.Print("Ingrese valor: ")
	fmt.Scanln(&A)

	fmt.Print("Ingrese valor: ")
	fmt.Scanln(&B)

	// Realizar las operaciones
	suma := A + B
	fmt.Println("La suma de los números es:", suma)

	res := A - B
	fmt.Println("La resta de los números es:", res)

	multi := A * B
	fmt.Println("La multiplicación de los números es:", multi)

	// Aseguramos que la división sea de tipo float64 para manejar decimales
	div := float64(A) / float64(B)
	fmt.Println("La división de los números es:", div)

	// Comparaciones
	igual := A == B
	fmt.Println("Los números son iguales:", igual)

	// Mayor y menor
	mayor := A > B
	fmt.Println("El número mayor es:", A)
	fmt.Println("El número menor es:", B)

	// Mostrar el resultado de mayor
	if mayor {
		fmt.Println("El número mayor es:", A)
	} else {
		fmt.Println("El número mayor es:", B)
	}
}
