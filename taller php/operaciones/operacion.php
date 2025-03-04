<?php
// Solicitar el valor de A y B
echo "Ingrese valor A: ";
$A = (int)trim(fgets(STDIN));

echo "Ingrese valor B: ";
$B = (int)trim(fgets(STDIN));

// Sumar los números
$suma = $A + $B;
echo "La suma de los números es: $suma\n";

// Restar los números
$res = $A - $B;
echo "La resta de los números es: $res\n";

// Multiplicar los números
$multi = $A * $B;
echo "La multiplicación de los números es: $multi\n";

// Dividir los números
if ($B != 0) {
    $div = $A / $B;
    echo "La división de los números es: $div\n";
} else {
    echo "No se puede dividir por 0\n";
}

// Comparar si A es igual a B
$igual = ($A == $B);
echo "El número A es igual a B: " . ($igual ? "Sí" : "No") . "\n";

// Comparar si A es mayor que B
$mayor = ($A > $B);
echo "El número A es mayor que B: " . ($mayor ? "Sí" : "No") . "\n";

// Comparar si A es menor que B
$menor = ($A < $B);
echo "El número A es menor que B: " . ($menor ? "Sí" : "No") . "\n";
?>