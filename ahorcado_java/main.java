import java.sql.*;
import java.util.*;

public class Ahorcado {

    private static final String URL_DB = "jdbc:postgresql://localhost:5432/ahorcado"; // URL de la DB
    private static final String USER_DB = "postgres"; // Usuario de la base de datos
    private static final String PASSWORD_DB = "tu_password"; // Contraseña de la base de datos

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String palabra = obtenerPalabraAleatoria();
        Set<Character> letrasCorrectas = new HashSet<>();
        Set<Character> letrasErroneas = new HashSet<>();
        int intentos = 6;  // Número de intentos disponibles

        while (intentos > 0) {
            mostrarEstado(palabra, letrasCorrectas);

            System.out.println("Letras erróneas: " + letrasErroneas);
            System.out.println("Te quedan " + intentos + " intentos.");
            System.out.print("Introduce una letra: ");
            char letra = scanner.next().charAt(0);

            if (letrasCorrectas.contains(letra) || letrasErroneas.contains(letra)) {
                System.out.println("Ya has usado esa letra.");
                continue;
            }

            if (palabra.contains(String.valueOf(letra))) {
                letrasCorrectas.add(letra);
            } else {
                letrasErroneas.add(letra);
                intentos--;
            }

            if (completarPalabra(palabra, letrasCorrectas)) {
                System.out.println("¡Felicidades, has ganado!");
                break;
            }
        }

        if (intentos == 0) {
            System.out.println("¡Has perdido! La palabra era: " + palabra);
        }
    }

    // Método para mostrar el estado actual del juego
    private static void mostrarEstado(String palabra, Set<Character> letrasCorrectas) {
        for (char c : palabra.toCharArray()) {
            if (letrasCorrectas.contains(c)) {
                System.out.print(c + " ");
            } else {
                System.out.print("_ ");
            }
        }
        System.out.println();
    }

    // Método para verificar si la palabra está completa
    private static boolean completarPalabra(String palabra, Set<Character> letrasCorrectas) {
        for (char c : palabra.toCharArray()) {
            if (!letrasCorrectas.contains(c)) {
                return false;
            }
        }
        return true;
    }

    // Método para obtener una palabra aleatoria desde la base de datos
    private static String obtenerPalabraAleatoria() {
        String palabra = "";
        try (Connection conn = DriverManager.getConnection(URL_DB, USER_DB, PASSWORD_DB);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT palabra FROM palabras ORDER BY RANDOM() LIMIT 1")) {

            if (rs.next()) {
                palabra = rs.getString("palabra");
            }

        } catch (SQLException e) {
            System.out.println("Error al obtener la palabra: " + e.getMessage());
        }
        return palabra;
    }
}
