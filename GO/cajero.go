package main

import (
	"fmt"
)

// Estructura que define un Usuario
type Usuario struct {
	Nombre string
	Pin    int
	Saldo  int
}

// Estructura que define el Banco
type Banco struct {
	Usuarios []Usuario
}

// Método para autenticar a un usuario
func (banco *Banco) autenticar(nombre string, pin int) bool {
	for _, usuario := range banco.Usuarios {
		if usuario.Nombre == nombre {
			if usuario.Pin == pin {
				fmt.Println("Estas Logeado")
				return true
			} else {
				fmt.Println("Pin o nombre incorrecto")
				return false
			}
		}
	}
	fmt.Println("El usuario no existe")
	return false
}

// Método para sacar dinero
func (banco *Banco) sacarDinero(nombre string, saldo int) {
	for i, usuario := range banco.Usuarios {
		if usuario.Nombre == nombre {
			if usuario.Saldo < saldo {
				fmt.Println("Saldo insuficiente")
				break
			} else {
				banco.Usuarios[i].Saldo -= saldo
				fmt.Printf("El saldo disponible es %d\n", banco.Usuarios[i].Saldo)
				break
			}
		}
	}
}

func main() {
	// Crear instancias de usuarios
	ana := Usuario{"Ana", 9872, 450}
	pablo := Usuario{"Pablo", 5555, 200}
	rodrigo := Usuario{"Rodrigo", 2222, 900}

	// Crear una instancia de Banco
	banco := Banco{Usuarios: []Usuario{ana, pablo, rodrigo}}

	for {
		// Interacción con el usuario
		fmt.Println("Bienvenido al Banco, por favor, identifiquese.")
		fmt.Println("Introduzca el nombre.")
		var nombre string
		fmt.Scanln(&nombre)

		fmt.Println("Introduzca el pin")
		var pin int
		fmt.Scanln(&pin)

		if banco.autenticar(nombre, pin) {
			for {
				fmt.Println("Por favor, elija una de estas opciones:\n 1. Sacar dinero\n 2. Terminar sesion.")
				var opcion string
				fmt.Scanln(&opcion)

				if opcion == "1" {
					fmt.Println("Introduce cantidad a sacar.")
					var saldo int
					fmt.Scanln(&saldo)
					banco.sacarDinero(nombre, saldo)

				} else if opcion == "2" {
					fmt.Println("Saliendo del sistema.")
					break
				} else {
					fmt.Println("Opcion incorrecta. Por favor, introduzca otra opcion.")
				}
			}
		} else {
			fmt.Println("Usuario no autenticado. Por favor, Introduzca nombre y pin correctos.")
		}
	}
}
