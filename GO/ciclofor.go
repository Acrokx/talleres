package main

import (
	"fmt"
	"math"
)

func main() {
	// Pedir el primer valor
	fmt.Println("Por favor ingrese el primer valor: ")
	var A int
	fmt.Scanln(&A)

	// Inicializar B en 0 (aunque no se usa en este caso)
	var B int = 0

	// Pedir el segundo valor
	fmt.Println("Por favor ingrese el segundo valor: ")
	var C int
	fmt.Scanln(&C)

	// Calcular la potencia
	valor := math.Pow(float64(A), float64(C))

	// Imprimir el resultado
	fmt.Printf("La potencia de %d sobre %d es: %.0f\n", A, C, valor)
}
