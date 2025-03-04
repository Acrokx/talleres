<?php
// Solicitar la entrada del usuario
echo "Escriba sus nombres completos: ";
$a = trim(fgets(STDIN));

echo "Escriba sus apellidos completos: ";
$b = trim(fgets(STDIN));

echo "Escriba su profesión: ";
$c = trim(fgets(STDIN));

echo "Escriba su año de nacimiento: ";
$d = (int)trim(fgets(STDIN));

// Calcular la edad
$e = 2025 - $d;

// Mostrar el resultado
echo "El (La) $c $a $b tiene $e años\n";
?>