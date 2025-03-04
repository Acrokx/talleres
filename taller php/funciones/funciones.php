<?php
// Operación con listas (equivalente a las tuplas de Python)

$a = array(1, 2, 3, 4, 5);
$b = array(6, 7, 8, 9, 10);
$c = array();

for ($contador = 0; $contador < count($a); $contador++) {
    $c[] = $a[$contador] * $b[$contador];
}
print_r($c);

// Funciones

// Definición y llamada de una función
function mostrar_texto() {
    echo "hola\n";
}

mostrar_texto();

// Función de multiplicación
function multiplicar() {
    $a = 7;
    $b = 9;
    echo $a * $b . "\n";
}

multiplicar();

// Ámbito de las variables (Variables dentro de una función no son accesibles fuera)
function multiplicar_ambito() {
    global $a, $b;  // Se usa 'global' para acceder a las variables globales dentro de la función
    echo $a * $b . "\n";
}

$a = 7;
$b = 9;
multiplicar_ambito();

// Funciones con valor de retorno
function multiplicar_return() {
    $a = 7;
    $b = 9;
    return $a * $b;
}

$resultado = multiplicar_return();
echo $resultado + 5 . "\n";

// Función que valida un dato
function validar_dato() {
    global $a;  // Acceder a la variable global 'a'
    if ($a == 7) {
        return true;
    } else {
        return false;
    }
}

$a = 9;
$dato = validar_dato();
echo $dato . "\n";
?>