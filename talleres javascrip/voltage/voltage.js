let voltaje = parseFloat(prompt('Ingrese el valor del voltaje del circuito (en voltios): '));
let resistencia = parseFloat(prompt('Ingrese el valor de la resistencia del circuito (en ohmios): '));

// Calcular la corriente utilizando la ley de Ohm (I = V / R)
if (resistencia !== 0) {
    let intensidad = voltaje / resistencia;
    alert(`Al conectar un resistor de R = ${resistencia} ohmios a una fuente de V = ${voltaje} voltios, circulará una corriente de ${intensidad.toFixed(2)} amperios.`);
} else {
    alert("La resistencia no puede ser cero.");
}