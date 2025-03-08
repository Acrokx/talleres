import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Definir la lista de días
        ArrayList<String> lista = new ArrayList<>();
        lista.add("Lunes");
        lista.add("Martes");
        lista.add("Miercoles");
        lista.add("Jueves");
        lista.add("Viernes");
        lista.add("Sabado");

        // Imprimir el elemento en la posición 4
        System.out.println(lista.get(4)); // Traerá "Viernes"

        // Imprimir la lista completa
        System.out.println(lista); // Traerá la lista completa

        // Imprimir los primeros 3 elementos de la lista (índices 0, 1, 2)
        System.out.println(lista.subList(0, 3)); // Traerá ["Lunes", "Martes", "Miercoles"]
    }
}
