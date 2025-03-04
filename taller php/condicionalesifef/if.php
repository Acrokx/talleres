<?php
// Condición simple
$a = 2;
if ($a == 2) {
    echo "a vale 2" . PHP_EOL;
} else {
    echo "a es diferente de 2" . PHP_EOL;
}

// Concatenar condiciones
$nombre = 'Cristhian';
$edad = 32;
$pais = 'Colombia';

if ($nombre == 'Cristhian' && $edad == 32 && $pais == 'Colombia') {
    echo "Su nombre es " . $nombre . " tiene " . $edad . " y es de " . $pais . PHP_EOL;
} elseif ($nombre == 'Cristhian' && $edad != 32) {
    echo "Su nombre es Cristhian y no tiene 32 años" . PHP_EOL;
} elseif ($nombre != 'Cristhian' && $edad == 32) {
    echo "Su nombre no es Cristhian y tiene 32 años" . PHP_EOL;
} else {
    echo "No se llama Cristhian ni tiene 32 años" . PHP_EOL;
}
?>