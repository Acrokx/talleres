<?php
// Definir valores booleanos
$a = true;
$b = false;

// Imprimir el resultado de la operación 'and' entre $a y $b
echo ($a && $b) ? 'true' : 'false'; // Imprime 'false' porque a es true y b es false

echo "\n"; // Salto de línea

// Definir valores numéricos
$a = 2;
$b = 3;
$c = 4;
$d = 10;

// Verificar la expresión con 'and' (y) entre comparaciones
echo ($a == $b && $c < $d) ? 'true' : 'false'; // Imprime 'false' porque a no es igual a b

echo "\n"; // Salto de línea

// Verificar la expresión con 'not' (negación) y 'and' (y)
echo (!($a == $b) && $c > $d) ? 'true' : 'false'; // Imprime 'false' porque c no es mayor que d
?>