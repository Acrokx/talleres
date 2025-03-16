package main

import "fmt"

func main() {
    // Contador con while loop en Go
    contador := 0
    for contador < 30 {
        contador++
        fmt.Println("Iteración", contador)
    }

    // Combinado con if-else
    for {
        fmt.Println("Introduzca un valor mayor a 10")
        var a int
        fmt.Scan(&a)
        
        if a > 10 {
            fmt.Println("Es correcto")
        } else {
            fmt.Println("Es incorrecto, pruebe de nuevo")
            break
        }
    }
}
