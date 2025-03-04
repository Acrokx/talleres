<?php
// Solicitar el valor del voltaje
echo "Ingrese el valor del voltaje del circuito: ";
$Voltaje = (int)trim(fgets(STDIN));

// Solicitar el valor de la resistencia
echo "Ingrese el valor de la resistencia del circuito: ";
$Resistencia = (int)trim(fgets(STDIN));

// Calcular la intensidad (amperaje)
$Intensidad = $Voltaje / $Resistencia;

// Imprimir el resultado
echo "Al conectar un resistor de R $Resistencia ohm a una fuente de V $Voltaje voltaje circulará una corriente de $Intensidad amperios\n";
?>