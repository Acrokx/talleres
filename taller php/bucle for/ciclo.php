<?php
// Lista de nombres
$nombres = ['Lopez', 'Sara', 'Pablo', 'Cesar \n\n'];
foreach ($nombres as $nombre) {
    echo $nombre . "\n";
}

// Diccionarios
$personas = []; // lista vacía que se llena con los diccionarios

// Crear los diccionarios (en PHP son arreglos asociativos)
$a = ['nombre' => 'Lopez', 'Edad' => 45];
$b = ['nombre' => 'Sara', 'Edad' => 11];
$c = ['nombre' => 'Pablo', 'Edad' => 32];
$d = ['nombre' => 'Cesar', 'Edad' => 39];

// Agregar los diccionarios a la lista de personas
array_push($personas, $a);
array_push($personas, $b);
array_push($personas, $c);
array_push($personas, $d);

// Mostrar la información de las personas
foreach ($personas as $persona) {
    echo $persona['nombre'] . " " . $persona['Edad'] . "\n";
}
?>