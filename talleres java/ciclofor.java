import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Solicitar el primer valor
        System.out.print("Por favor ingrese el primer valor: ");
        int A = scanner.nextInt();
        
        // Solicitar el segundo valor
        System.out.print("Por favor ingrese el segundo valor: ");
        int C = scanner.nextInt();
        
        // Calcular la potencia
        int resultado = (int) Math.pow(A, C);  // Math.pow retorna un double, lo convertimos a int
        
        // Mostrar el resultado
        System.out.println("La potencia de " + A + " sobre " + C + " es: " + resultado);
        
        scanner.close();  // Cerrar el scanner
    }
}