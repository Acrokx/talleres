import java.util.ArrayList;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Parte 1: Imprimir nombres
        ArrayList<String> nombres = new ArrayList<>();
        nombres.add("Lopez");
        nombres.add("Sara");
        nombres.add("Pablo");
        nombres.add("Cesar \n\n");

        for (String nombre : nombres) {
            System.out.println(nombre);
        }

        // Parte 2: Operar con diccionarios (en Java usamos HashMap)
        ArrayList<HashMap<String, Object>> personas = new ArrayList<>();

        // Crear y llenar los HashMaps (equivalente a los diccionarios de Python)
        HashMap<String, Object> a = new HashMap<>();
        a.put("nombre", "Lopez");
        a.put("Edad", 45);

        HashMap<String, Object> b = new HashMap<>();
        b.put("nombre", "Sara");
        b.put("Edad", 11);

        HashMap<String, Object> c = new HashMap<>();
        c.put("nombre", "Pablo");
        c.put("Edad", 32);

        HashMap<String, Object> d = new HashMap<>();
        d.put("nombre", "Cesar");
        d.put("Edad", 39);

        // Agregar los HashMaps a la lista
        personas.add(a);
        personas.add(b);
        personas.add(c);
        personas.add(d);

        // Iterar sobre la lista de personas e imprimir nombre y edad
        for (HashMap<String, Object> persona : personas) {
            System.out.println(persona.get("nombre") + " " + persona.get("Edad"));
        }
    }
}