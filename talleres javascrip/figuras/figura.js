function calcular() {
    let Figura = prompt('Seleccione la figura para calcular su área:\n\n1 para rombo\n2 para rectángulo\n3 para cuadrado\n4 para trapecio');
    const Pi = 3.1416;
    const constValue = 2;

    switch(Figura) {
        case '1':
            let Dmayor = parseInt(prompt('Ingresa el valor de la diagonal mayor:'));
            let Dmenor = parseInt(prompt('Ingresa el valor de la diagonal menor:'));
            let AreaRombo = (Dmayor * Dmenor) / constValue;
            alert('El área del rombo es: ' + AreaRombo);
            break;

        case '2':
            let Largo = parseInt(prompt('Ingresa el valor del largo del rectángulo:'));
            let Ancho = parseInt(prompt('Ingresa el valor del ancho del rectángulo:'));
            let AreaRectangulo = Largo * Ancho;
            alert('El área del rectángulo es: ' + AreaRectangulo);
            break;

        case '3':
            let Lado = parseInt(prompt('Ingresa el valor del lado del cuadrado:'));
            let AreaCuadrado = Lado * Lado;
            alert('El área del cuadrado es: ' + AreaCuadrado);
            break;

        case '4':
            let Bmayor = parseInt(prompt('Ingresa el valor de la base mayor:'));
            let Bmenor = parseInt(prompt('Ingresa el valor de la base menor:'));
            let H = parseInt(prompt('Ingresa la altura del trapecio:'));
            let AreaTrapecio = (((Bmayor + Bmenor) * H) / 2);
            alert('El área del trapecio es: ' + AreaTrapecio);
            break;

        default:
            let Area = Pi * 1; // Este caso no es claro en Python, pero he asumido que A es 1
            alert('El área del círculo es: ' + Area);
            break;
    }
}