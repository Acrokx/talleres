<?php
// Contador
$contador = 0;
while ($contador < 30) {
    $contador++;
    echo "iteración " . $contador . "\n";
}

// Combinado con if-else
while (true) {
    echo "Introduzca un valor mayor a 10: ";
    $a = (int)trim(fgets(STDIN)); // Leer entrada del usuario y convertir a entero
    if ($a > 10) {
        echo "Es correcto\n";
    } else {
        echo "Es incorrecto, pruebe de nuevo\n";
        break; // Salir del bucle si la condición no se cumple
    }
}
?>