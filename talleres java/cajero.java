import java.util.ArrayList;
import java.util.Scanner;

class Usuario {
    String nombre;
    int pin;
    double saldo;

    public Usuario(String nombre, int pin, double saldo) {
        this.nombre = nombre;
        this.pin = pin;
        this.saldo = saldo;
    }
}

class Banco {
    ArrayList<Usuario> usuarios;

    public Banco(ArrayList<Usuario> usuarios) {
        this.usuarios = usuarios;
    }

    public boolean autenticar(String nombre, int pin) {
        for (Usuario usuario : usuarios) {
            if (usuario.nombre.equals(nombre)) {
                if (usuario.pin == pin) {
                    System.out.println("Estas Logeado");
                    return true;
                } else {
                    System.out.println("Pin o nombre incorrecto");
                    return false;
                }
            }
        }
        System.out.println("El usuario no existe");
        return false;
    }

    public void sacar_dinero(String nombre, double saldo) {
        for (Usuario usuario : usuarios) {
            if (usuario.nombre.equals(nombre)) {
                if (usuario.saldo < saldo) {
                    System.out.println("Saldo insuficiente");
                    break;
                } else {
                    usuario.saldo -= saldo;
                    System.out.println("El saldo disponible es " + usuario.saldo);
                }
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Crear usuarios
        Usuario ana = new Usuario("Ana", 9872, 450);
        Usuario pablo = new Usuario("Pablo", 5555, 200);
        Usuario rodrigo = new Usuario("Rodrigo", 2222, 900);

        // Crear banco y agregar usuarios
        ArrayList<Usuario> usuarios = new ArrayList<>();
        usuarios.add(ana);
        usuarios.add(pablo);
        usuarios.add(rodrigo);

        Banco banco = new Banco(usuarios);

        // Bucle principal
        while (true) {
            System.out.println("Bienvenido al Banco, por favor, identifiquese.");
            System.out.println("Introduzca el nombre.");
            String nombre = scanner.nextLine();
            System.out.println("Introduzca el pin");
            int pin = scanner.nextInt();
            scanner.nextLine();  // Limpiar el buffer

            if (banco.autenticar(nombre, pin)) {
                while (true) {
                    System.out.println("Por favor, elija una de estas opciones:\n 1. Sacar dinero\n 2. Terminar sesion.");
                    String opcion = scanner.nextLine();

                    if (opcion.equals("1")) {
                        System.out.println("Introduce cantidad a sacar.");
                        double saldo = scanner.nextDouble();
                        scanner.nextLine();  // Limpiar el buffer
                        banco.sacar_dinero(nombre, saldo);
                    } else if (opcion.equals("2")) {
                        System.out.println("Saliendo del sistema.");
                        break;
                    } else {
                        System.out.println("Opcion incorrecta. Por favor, introduzca otra opcion.");
                    }
                }
            } else {
                System.out.println("Usuario no autenticado. Por favor, Introduzca nombre y pin correctos.");
            }
        }
    }
}