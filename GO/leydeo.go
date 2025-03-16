package main

import "fmt"

func main() {
	// Definir las variables para voltaje, resistencia e intensidad
	var Voltaje, Resistencia int
	var Intensidad float64

	// Solicitar los datos al usuario
	fmt.Print("Ingrese el valor del voltaje del circuito: ")
	fmt.Scanln(&Voltaje)

	fmt.Print("Ingrese el valor de la resistencia del circuito: ")
	fmt.Scanln(&Resistencia)

	// Calcular la intensidad (amperaje) usando la Ley de Ohm
	Intensidad = float64(Voltaje) / float64(Resistencia)

	// Imprimir el resultado
	fmt.Printf("Al conectar un resistor de R %d ohm a una fuente de V %d voltios, circulará una corriente de %.2f amperios\n", Resistencia, Voltaje, Intensidad)
}
