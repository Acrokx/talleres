package main

import (
	"fmt"
	"math"
)

func main() {
	// Definir las variables
	a := 10
	b := 4

	// Multiplicación
	fmt.Println("La primera variable es:", a)
	fmt.Println("El signo de la operación es: *")
	fmt.Println("La segunda variable es:", b)
	c := a * b
	fmt.Println("El resultado es:", c)
	fmt.Println("Tipo de c:", fmt.Sprintf("%T", c))

	// División
	fmt.Println("La primera variable es:", a)
	fmt.Println("El signo de la operación es: /")
	fmt.Println("La segunda variable es:", b)
	// División flotante para obtener decimales
	c = a / b
	fmt.Println("El resultado es:", c)
	fmt.Println("Tipo de c:", fmt.Sprintf("%T", c))

	// Suma
	fmt.Println("La primera variable es:", a)
	fmt.Println("El signo de la operación es: +")
	fmt.Println("La segunda variable es:", b)
	c = a + b
	fmt.Println("El resultado es:", c)
	fmt.Println("Tipo de c:", fmt.Sprintf("%T", c))

	// Resta
	fmt.Println("La primera variable es:", a)
	fmt.Println("El signo de la operación es: -")
	fmt.Println("La segunda variable es:", b)
	c = a - b
	fmt.Println("El resultado es:", c)
	fmt.Println("Tipo de c:", fmt.Sprintf("%T", c))

	// Exponente (potencia)
	fmt.Println("La primera variable es: %.2f", a)
	fmt.Println("El signo de la operación es: **")
	fmt.Println("La segunda variable es:", b)
	// Potencia
	c = int(math.Pow(float64(a), float64(b)))
	fmt.Println("El resultado es:", c)
	fmt.Println("Tipo de c:", fmt.Sprintf("%T", c))

	// Módulo
	fmt.Println("La primera variable es:", a)
	fmt.Println("El signo de la operación es: %")
	fmt.Println("La segunda variable es:", b)
	c = a % b
	fmt.Println("El resultado es:", c)
	fmt.Println("Tipo de c:", fmt.Sprintf("%T", c))
}
