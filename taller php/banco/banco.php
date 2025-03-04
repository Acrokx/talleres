<?php

// Definición de la clase Usuario
class Usuario {
    public $nombre;
    public $pin;
    public $saldo;

    public function __construct($nombre, $pin, $saldo) {
        $this->nombre = $nombre;
        $this->pin = $pin;
        $this->saldo = $saldo;
    }
}

// Definición de la clase Banco
class Banco {
    public $usuarios;

    public function __construct($usuarios = []) {
        $this->usuarios = $usuarios;
    }

    // Método para autenticar al usuario
    public function autenticar($nombre, $pin) {
        foreach ($this->usuarios as $usuario) {
            if ($usuario->nombre == $nombre) {
                if ($usuario->pin == $pin) {
                    echo 'Estas Logeado' . PHP_EOL;
                    return true;
                } else {
                    echo 'Pin o nombre incorrecto' . PHP_EOL;
                    return false;
                }
            }
        }
        echo 'El usuario no existe' . PHP_EOL;
        return false;
    }

    // Método para sacar dinero
    public function sacar_dinero($nombre, $saldo) {
        foreach ($this->usuarios as $usuario) {
            if ($usuario->nombre == $nombre) {
                if ($usuario->saldo < $saldo) {
                    echo 'Saldo insuficiente' . PHP_EOL;
                    break;
                } elseif ($usuario->saldo >= $saldo) {
                    $usuario->saldo -= $saldo;
                    echo 'El saldo disponible es ' . $usuario->saldo . PHP_EOL;
                }
            }
        }
    }
}

// Crear instancias de Usuario
$ana = new Usuario('Ana', 9872, 450);
$pablo = new Usuario('Pablo', 5555, 200);
$rodrigo = new Usuario('Rodrigo', 2222, 900);

// Crear una instancia de Banco con los usuarios
$banco = new Banco([$ana, $pablo, $rodrigo]);

while (true) {
    echo 'Bienvenido al Banco, por favor, identifíquese.' . PHP_EOL;
    echo 'Introduzca el nombre: ';
    $nombre = trim(fgets(STDIN));
    echo 'Introduzca el pin: ';
    $pin = (int)trim(fgets(STDIN));

    if ($banco->autenticar($nombre, $pin)) {
        while (true) {
            echo 'Por favor, elija una de estas opciones:' . PHP_EOL;
            echo '1. Sacar dinero' . PHP_EOL;
            echo '2. Terminar sesión.' . PHP_EOL;
            $opcion = trim(fgets(STDIN));

            if ($opcion == '1') {
                echo 'Introduce cantidad a sacar: ';
                $saldo = (int)trim(fgets(STDIN));
                $banco->sacar_dinero($nombre, $saldo);
            } elseif ($opcion == '2') {
                echo 'Saliendo del sistema.' . PHP_EOL;
                break;
            } else {
                echo 'Opción incorrecta. Por favor, introduzca otra opción.' . PHP_EOL;
            }
        }
    } else {
        echo 'Usuario no autenticado. Por favor, introduzca nombre y pin correctos.' . PHP_EOL;
    }
}
?>