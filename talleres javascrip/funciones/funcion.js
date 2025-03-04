// Parte 1: Multiplicación de dos arreglos
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];
let c = [];

for (let i = 0; i < a.length; i++) {
    c.push(a[i] * b[i]);
}
console.log(c); // Muestra la multiplicación de los arreglos

// Funciones

// Definición y llamada
function mostrar() {
    console.log('hola');
}

mostrar();

// Ámbito de las variables
function multiplicar() {
    let a = 7;
    let b = 9;
    console.log(a * b);
}

multiplicar();

// Las variables definidas fuera de la función son accesibles dentro de ella
let aGlobal = 7;  // Renombré la variable 'a' fuera de la función para evitar conflicto.
let bGlobal = 9;  // Renombré la variable 'b' fuera de la función para evitar conflicto.
function multiplicarGlobal() {
    console.log(aGlobal * bGlobal);
}
multiplicarGlobal();

// Las funciones pueden devolver valores usando `return`
function multiplicarConReturn() {
    let a = 7;
    let b = 9;
    return a * b;
}
let resultado = multiplicarConReturn();
console.log(resultado + 5);

// Devolver valores de diferentes tipos
function validarDato() {
    if (aGlobal === 7) {
        return true;
    } else {
        return false;
    }
}

aGlobal = 9;  // Cambié 'a' por 'aGlobal' aquí también para mantener la consistencia.
let dato = validarDato();
console.log(dato);