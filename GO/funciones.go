package main

import "fmt"

// Función para multiplicar los elementos de dos slices
func multiplicarSlices(a, b []int) []int {
	var c []int
	for i := 0; i < len(a); i++ {
		c = append(c, a[i]*b[i])
	}
	return c
}

func main() {
	// Tuplas en Python son similares a slices en Go
	a := []int{1, 2, 3, 4, 5}
	b := []int{6, 7, 8, 9, 10}

	// Multiplicamos los elementos de los slices
	c := multiplicarSlices(a, b)
	fmt.Println(c)

	// Funciones en Go

	// Definición y llamada de función
	mostrarTexto()

	// Función de multiplicación
	multiplicar()

	// Ámbito de las variables
	a1 := 7
	b1 := 9
	multiplicarConVariables(a1, b1)

	// Función con return
	resultado := multiplicarReturn()
	fmt.Println(resultado + 5)

	// Validar dato
	a2 := 9
	dato := validarDato(a2)
	fmt.Println(dato)
}

// Función que imprime un texto
func mostrarTexto() {
	fmt.Println("hola")
}

// Función que multiplica dos números y los imprime
func multiplicar() {
	a := 7
	b := 9
	fmt.Println(a * b)
}

// Función que usa variables externas
func multiplicarConVariables(a, b int) {
	fmt.Println(a * b)
}

// Función que devuelve el resultado de la multiplicación
func multiplicarReturn() int {
	a := 7
	b := 9
	return a * b
}

// Función que valida un dato
func validarDato(a int) bool {
	if a == 7 {
		return true
	}
	return false
}
