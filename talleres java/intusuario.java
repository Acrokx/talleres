import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Solicitar entradas del usuario
        System.out.print("Escriba sus nombres completos: ");
        String a = scanner.nextLine();
        
        System.out.print("Escriba sus apellidos completos: ");
        String b = scanner.nextLine();
        
        System.out.print("Escriba su profesion: ");
        String c = scanner.nextLine();
        
        System.out.print("Escriba su año de nacimiento: ");
        int d = scanner.nextInt();
        
        // Calcular la edad
        int e = 2025 - d;
        
        // Mostrar el resultado
        System.out.println("El (La) " + c + " " + a + " " + b + " tiene " + e + " años.");
        
        scanner.close();
    }
}
