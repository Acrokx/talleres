<?php
// Solicitar el primer valor al usuario
echo 'Por favor ingrese el primer valor: ';
$A = (int)trim(fgets(STDIN));

// Inicializar B
$B = 0;

// Solicitar el segundo valor al usuario
echo 'Por favor ingrese el segundo valor: ';
$C = (int)trim(fgets(STDIN));

// Calcular la potencia
$valor = pow($A, $C);
echo 'La potencia de ' . $A . ' sobre ' . $C . ' es: ' . $valor . PHP_EOL;
?>