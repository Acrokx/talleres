import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        
        // Contador simple
        int contador = 0;
        while (contador < 30) {
            contador++;
            System.out.println("Iteracion " + contador);
        }

        // Combinado con if-else
        Scanner scanner = new Scanner(System.in); // Se utiliza para leer entradas del usuario
        
        while (true) {
            System.out.println("Introduzca un valor mayor a 10");
            int a = scanner.nextInt(); // Lee el valor ingresado por el usuario
            if (a > 10) {
                System.out.println("Es correcto");
            } else {
                System.out.println("Es incorrecto, pruebe de nuevo");
                break; // Sale del bucle si el valor ingresado es incorrecto
            }
        }
        
        scanner.close(); // Cierra el scanner al finalizar
    }
}