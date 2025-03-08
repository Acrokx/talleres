import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Solicitar los valores de A y B
        System.out.print("Ingrese valor para A: ");
        int A = scanner.nextInt();
        
        System.out.print("Ingrese valor para B: ");
        int B = scanner.nextInt();
        
        // Realizar las operaciones y mostrar los resultados
        
        // Suma
        int suma = A + B;
        System.out.println("La suma de los números es: " + suma);
        
        // Resta
        int res = A - B;
        System.out.println("La resta de los números es: " + res);
        
        // Multiplicación
        int multi = A * B;
        System.out.println("La multiplicación de los números es: " + multi);
        
        // División
 
