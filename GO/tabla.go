package main

import "fmt"

func main() {
	// Operaciones con booleanos
	a := true
	b := false
	fmt.Println(a && b) // Imprime el resultado de a AND b

	// Operaciones con números y condiciones
	x := 2
	y := 3
	z := 4
	w := 10

	// Imprime el resultado de (x == y) AND (z < w)
	fmt.Println(x == y && z < w)

	// Imprime el resultado de (NOT (x == y)) AND (z > w)
	fmt.Println(!(x == y) && z > w)
}
