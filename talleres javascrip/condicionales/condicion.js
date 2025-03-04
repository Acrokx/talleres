// Condicional simple
let a = 2;
if (a === 2) {
    console.log('a vale 2');
} else {
    console.log('a es diferente de 2');
}

// Concatenar condiciones
let nombre = 'Cristhian';
let edad = 32;
let pais = 'Colombia';

if (nombre === 'Cristhian' && edad === 32 && pais === 'Colombia') {
    console.log('Su nombre es', nombre, 'tiene', edad, 'y es de', pais);
} else if (nombre === 'Cristhian' && edad !== 32) {
    console.log('Su nombre es Cristhian y no tiene 32 años');
} else if (nombre !== 'Cristhian' && edad === 32) {
    console.log('Su nombre no es Cristhian y tiene 32 años');
} else {
    console.log('No se llama Cristhian ni tiene 32 años');
}