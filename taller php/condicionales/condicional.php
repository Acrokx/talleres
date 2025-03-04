<?php
// Solicitar la figura para calcular su área
echo "Seleccione la figura a calcular su área: \n\n 1 para rombo\n\n 2 para rectángulo \n\n 3 para cuadrado \n\n 4 para trapecio \n\n: ";
$Figura = trim(fgets(STDIN));
$Pi = 3.1416;
$const = 2;

switch ($Figura) {
    case '1':
        // Área del rombo
        echo "Ingresa el valor de la diagonal mayor: ";
        $Dmayor = (int)trim(fgets(STDIN));
        echo "Ingresa el valor de la diagonal menor: ";
        $Dmenor = (int)trim(fgets(STDIN));
        $Area = ($Dmayor + $Dmenor) / $const;
        echo "El área del rombo es: " . $Area . "\n";
        break;

    case '2':
        // Área del rectángulo
        echo "Ingresa el valor del largo del rectángulo: ";
        $Largo = (int)trim(fgets(STDIN));
        echo "Ingresa el valor del ancho del rectángulo: ";
        $Ancho = (int)trim(fgets(STDIN));
        $Area = $Largo * $Ancho;
        echo "El área del rectángulo es: " . $Area . "\n";
        break;

    case '3':
        // Área del cuadrado
        echo "Ingresa el valor del lado del cuadrado: ";
        $Lado = (int)trim(fgets(STDIN));
        $Area = $Lado * $Lado;
        echo "El área del cuadrado es: " . $Area . "\n";
        break;

    case '4':
        // Área del trapecio
        echo "Ingresa el valor de la base mayor: ";
        $Bmayor = (int)trim(fgets(STDIN));
        echo "Ingresa el valor de la base menor: ";
        $Bmenor = (int)trim(fgets(STDIN));
        echo "Ingresa la altura del trapecio: ";
        $H = (int)trim(fgets(STDIN));
        $Area = (($Bmayor + $Bmenor) * $H) / 2;
        echo "El área del trapecio es: " . $Area . "\n";
        break;

    case ' ':
        // Si se selecciona el caso de espacio (sin valor), se calcula el área como un círculo
        echo "Ingresa el valor de A: ";
        $A = (int)trim(fgets(STDIN));
        $Area = $A * $Pi;
        echo "El área del círculo es: " . $Area . "\n";
        break;

    default:
        echo "Opción no válida. Por favor, seleccione una figura válida.\n";
        break;
}
?>