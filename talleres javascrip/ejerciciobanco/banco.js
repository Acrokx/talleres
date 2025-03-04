// Definición de la clase Usuario
class Usuario {
    constructor(nombre, pin, saldo) {
        this.nombre = nombre;
        this.pin = pin;
        this.saldo = saldo;
    }
}

// Definición de la clase Banco
class Banco {
    constructor(usuarios = []) {
        this.usuarios = usuarios;
    }

    autenticar(nombre, pin) {
        for (let usuario of this.usuarios) {
            if (usuario.nombre === nombre) {
                if (usuario.pin === pin) {
                    alert('Estas Logeado');
                    return true;
                } else {
                    alert('Pin o nombre incorrecto');
                    return false;
                }
            }
        }
        alert('El usuario no existe');
        return false;
    }

    sacarDinero(nombre, cantidad) {
        for (let usuario of this.usuarios) {
            if (usuario.nombre === nombre) {
                if (usuario.saldo < cantidad) {
                    alert('Saldo insuficiente');
                    break;
                } else if (usuario.saldo >= cantidad) {
                    usuario.saldo -= cantidad;
                    alert('El saldo disponible es ' + usuario.saldo);
                }
            }
        }
    }
}

// Crear instancias de usuarios
const ana = new Usuario('Ana', 9872, 450);
const pablo = new Usuario('Pablo', 5555, 200);
const rodrigo = new Usuario('Rodrigo', 2222, 900);

// Crear la instancia del banco con los usuarios
const banco = new Banco([ana, pablo, rodrigo]);

// Función para iniciar sesión y gestionar las opciones del banco
function iniciarSesion() {
    let nombre = prompt('Introduzca el nombre.');
    let pin = parseInt(prompt('Introduzca el pin'), 10);

    if (banco.autenticar(nombre, pin)) {
        while (true) {
            let opcion = prompt('Por favor, elija una de estas opciones:\n1. Sacar dinero\n2. Terminar sesión.');
            
            if (opcion === '1') {
                let cantidad = parseInt(prompt('Introduce cantidad a sacar'), 10);
                banco.sacarDinero(nombre, cantidad);
            } else if (opcion === '2') {
                alert('Saliendo del sistema.');
                break;
            } else {
                alert('Opción incorrecta. Por favor, introduzca otra opción.');
            }
        }
    } else {
        alert('Usuario no autenticado. Por favor, Introduzca nombre y pin correctos.');
    }
}

// Llamar a la función para iniciar sesión
iniciarSesion();