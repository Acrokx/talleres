package main

import (
	"fmt"
)

func main() {
	var Figura string
	Pi := 3.1416
	const Const = 2
	var Area float64

	fmt.Println("Selecciona la figura a calcular su área:")
	fmt.Println("1 para rombo")
	fmt.Println("2 para rectángulo")
	fmt.Println("3 para cuadrado")
	fmt.Println("4 para trapecio")
	fmt.Print(": ")
	fmt.Scanln(&Figura)

	switch Figura {
	case "1":
		var Dmayor, Dmenor int
		fmt.Print("Ingresa el valor de la diagonal mayor: ")
		fmt.Scanln(&Dmayor)
		fmt.Print("Ingresa el valor de la diagonal menor: ")
		fmt.Scanln(&Dmenor)
		Area = float64(Dmayor*Dmenor) / float64(Const)
		fmt.Printf("El área del rombo es: %.2f\n", Area)
	case "2":
		var Largo, Ancho int
		fmt.Print("Ingresa el valor del largo del rectángulo: ")
		fmt.Scanln(&Largo)
		fmt.Print("Ingresa el valor del ancho del rectángulo: ")
		fmt.Scanln(&Ancho)
		Area = float64(Largo * Ancho)
		fmt.Printf("El área del rectángulo es: %.2f\n", Area)
	case "3":
		var Lado int
		fmt.Print("Ingresa el valor del lado del cuadrado: ")
		fmt.Scanln(&Lado)
		Area = float64(Lado * Lado)
		fmt.Printf("El área del cuadrado es: %.2f\n", Area)
	case "4":
		var Bmayor, Bmenor, H int
		fmt.Print("Ingresa el valor de la base mayor: ")
		fmt.Scanln(&Bmayor)
		fmt.Print("Ingresa el valor de la base menor: ")
		fmt.Scanln(&Bmenor)
		fmt.Print("Ingresa la altura del trapecio: ")
		fmt.Scanln(&H)
		Area = float64((Bmayor + Bmenor) * H) / 2
		fmt.Printf("El área del trapecio es: %.2f\n", Area)
	default:
		// Si el caso es vacío o no válido, se puede calcular el área con Pi, si es necesario.
		Area = Pi
		fmt.Printf("Área con Pi: %.2f\n", Area)
	}
}
