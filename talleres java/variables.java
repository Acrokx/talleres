public class Main {
    public static void main(String[] args) {
        // Definir las variables
        int a = 10;
        int b = 4;

        // Multiplicación
        System.out.println("La primera variable es: " + a);
        System.out.println("El signo de la operación es: *");
        System.out.println("La segunda variable es: " + b);
        int c = a * b;
        System.out.println("El resultado es: " + c);
        System.out.println("Tipo de dato de c: " + ((Object)c).getClass().getName());  // Muestra el tipo de dato de c

        // División
        System.out.println("La primera variable es: " + a);
        System.out.println("El signo de la operación es: /");
        System.out.println("La segunda variable es: " + b);
        double div = (double) a / b;  // Convertimos a double para obtener un resultado con decimales
        System.out.println("El resultado es: " + div);
        System.out.println("Tipo de dato de c: " + ((Object)div).getClass().getName()); 
