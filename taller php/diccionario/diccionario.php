<?php
// Creación de un conjunto (asociativo en PHP)
$coche = array(
    'marca' => 'Mustang',
    'color' => 'plateado',
    'modelo' => 'inglish',
    'placa' => 'SNA025'
);

// Imprimir el valor de 'color'
echo $coche['color'] . PHP_EOL;

// Cambiar el valor de 'color'
$coche['color'] = 'verde';
echo $coche['color'] . PHP_EOL;

// Imprimir el valor de 'marca'
echo $coche['marca'] . PHP_EOL;

// Cambiar el valor de 'marca'
$coche['marca'] = 'Mazda';
echo $coche['marca'] . PHP_EOL;

// Imprimir el contenido completo del diccionario
print_r($coche);
?>