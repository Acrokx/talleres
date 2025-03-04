
function calcularPotencia() {
    let A = parseInt(prompt('Por favor ingrese el primer valor: '));
    let C = parseInt(prompt('Por favor ingrese el segundo valor: '));
    
    let valor = Math.pow(A, C); // Math.pow() para calcular la potencia
    console.log('La potencia de', A, 'sobre', C, 'es:', valor);
}
