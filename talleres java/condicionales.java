import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitar figura a calcular
        System.out.println("Seleccione la figura a calcular su área: ");
        System.out.println("1 para rombo");
        System.out.println("2 para rectángulo");
        System.out.println("3 para cuadrado");
        System.out.println("4 para trapecio");
        System.out.print(": ");
        String figura = scanner.nextLine();

        double pi = 3.1416;
        int const2 = 2;

        // Evaluar la figura seleccionada
        switch (figura) {
            case "1": // Rombo
                System.out.print("Ingresa el valor de la diagonal mayor: ");
                int dMayor = scanner.nextInt();
                System.out.print("Ingresa el valor de la diagonal menor: ");
                int dMenor = scanner.nextInt();
                double areaRombo = (dMayor * dMenor) / const2;
                System.out.println("El área del rombo es: " + areaRombo);
                break;

            case "2": // Rectángulo
                System.out.print("Ingresa el valor del largo del rectángulo: ");
                int largo = scanner.nextInt();
                System.out.print("Ingresa el valor del ancho del rectángulo: ");
                int ancho = scanner.nextInt();
                double areaRectangulo = largo * ancho;
                System.out.println("El área del rectángulo es: " + areaRectangulo);
                break;

            case "3": // Cuadrado
                System.out.print("Ingresa el valor del lado del cuadrado: ");
                int lado = scanner.nextInt();
                double areaCuadrado = lado * lado;
                System.out.println("El área del cuadrado es: " + areaCuadrado);
                break;

            case "4": // Trapecio
                System.out.print("Ingresa el valor de la base mayor: ");
                int bMayor = scanner.nextInt();
                System.out.print("Ingresa el valor de la base menor: ");
                int bMenor = scanner.nextInt();
                System.out.print("Ingresa la altura del trapecio: ");
                int altura = scanner.nextInt();
                double areaTrapecio = ((bMayor + bMenor) * altura) / 2.0;
                System.out.println("El área del trapecio es: " + areaTrapecio);
                break;

            default: // Opción no válida
                System.out.println("Opción no válida.");
                break;
        }

        scanner.close();
    }
}