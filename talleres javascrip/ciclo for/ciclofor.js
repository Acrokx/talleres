// Lista de nombres
let nombres = ['Lopez', 'Sara', 'Pablo', 'Cesar \n\n'];

// Imprimir los nombres
for (let nombre of nombres) {
    console.log(nombre);
}

// Crear los objetos (equivalente a los diccionarios en Python)
let a = { 'nombre': 'Lopez', 'Edad': 45 };
let b = { 'nombre': 'Sara', 'Edad': 11 };
let c = { 'nombre': 'Pablo', 'Edad': 32 };
let d = { 'nombre': 'Cesar', 'Edad': 39 };

// Crear una lista vacía y agregar los objetos (equivalente al método append en Python)
let personas = [];
personas.push(a);
personas.push(b);
personas.push(c);
personas.push(d);

// Imprimir los nombres y edades de las personas
for (let persona of personas) {
    console.log(persona['nombre'], persona['Edad']);
}