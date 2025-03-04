<?php
// Crear la lista
$Lista = array('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado');

// Imprimir el elemento en la posición 4 (comienza desde 0)
echo $Lista[4] . "\n"; // Imprimirá 'Viernes'

// Imprimir la lista completa
print_r($Lista);

// Imprimir un subconjunto de la lista (desde el índice 0 hasta el índice 2)
echo implode(', ', array_slice($Lista, 0, 3)) . "\n"; // Imprimirá 'Lunes, Martes, Miercoles'

// Crear una lista más compleja
$Lista = array('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 1, 2, 3, array('Cristhian', 0.2, 2.25, true));

// Imprimir los primeros 4 elementos de la lista
echo implode(', ', array_slice($Lista, 0, 4)) . "\n"; // Imprimirá 'Lunes, Martes, Miercoles, Jueves'

// Imprimir elementos específicos de la lista interna (índice 9 es una lista anidada)
echo $Lista[9][0] . ", " . $Lista[9][1] . ", " . $Lista[9][2] . "\n"; // Imprimirá 'Cristhian, 0.2, 2.25'
?>