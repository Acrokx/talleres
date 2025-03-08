import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Creación del HashMap (equivalente a un diccionario en Python)
        HashMap<String, String> coche = new HashMap<>();
        
        // Agregar elementos al HashMap
        coche.put("marca", "Mustang");
        coche.put("color", "plateado");
        coche.put("modelo", "inglish");
        coche.put("placa", "SNA025");
        
        // Imprimir el valor de "color"
        System.out.println(coche.get("color"));
        
        // Cambiar el valor de "color"
        coche.put("color", "verde");
        System.out.println(coche.get("color"));
        
        // Imprimir el valor de "marca"
        System.out.println(coche.get("marca"));
        
        // Cambiar el valor de "marca"
        coche.put("marca", "Mazda");
        System.out.println(coche.get("marca"));
        
        // Imprimir el HashMap completo
        System.out.println(coche);
    }
}