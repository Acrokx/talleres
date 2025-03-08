import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitar el voltaje y la resistencia del usuario
        System.out.print("Ingrese el valor del voltaje del circuito: ");
        int voltaje = scanner.nextInt();

        System.out.print("Ingrese el valor de la resistencia del circuito: ");
        int resistencia = scanner.nextInt();

        // Calcular la intensidad (amperaje)
        double intensidad = (double) voltaje / resistencia;

        // Mostrar el resultado
        System.out.println("Al conectar un resistor de R " + resistencia + " ohm a una fuente de V " + voltaje + " voltios, circulará una corriente de " + intensidad + " amperios.");

        scanner.close();
    }
}