import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Definición de las tuplas (en Java usamos arrays)
        int[] a = {1, 2, 3, 4, 5};
        int[] b = {6, 7, 8, 9, 10};
        ArrayList<Integer> c = new ArrayList<>();
        
        // Bucle para multiplicar los elementos de las dos "tuplas"
        for (int i = 0; i < a.length; i++) {
            c.add(a[i] * b[i]);
        }
        
        // Imprimir el resultado
        System.out.println(c);
    }
}