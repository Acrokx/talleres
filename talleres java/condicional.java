public class Main {
    public static void main(String[] args) {
        // Primer bloque
        int a = 2;
        if (a == 2) {
            System.out.println("a vale 2");
        } else {
            System.out.println("a es diferente de 2");
        }

        // Concatenar condiciones
        String nombre = "Cristhian";
        int edad = 32;
        String pais = "Colombia";

        if (nombre.equals("Cristhian") && edad == 32 && pais.equals("Colombia")) {
            System.out.println("Su nombre es " + nombre + ", tiene " + edad + " y es de " + pais);
        } else if (nombre.equals("Cristhian") && edad != 32) {
            System.out.println("Su nombre es Cristhian y no tiene 32 años");
        } else if (!nombre.equals("Cristhian") && edad == 32) {
            System.out.println("Su nombre no es Cristhian y tiene 32 años");
        } else {
            System.out.println("No se llama Cristhian ni tiene 32 años");
        }
    }
}