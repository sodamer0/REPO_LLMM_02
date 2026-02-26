/*

EJERCICIO 5 ⛽
Pide al usuario: litros de combustible, kilómetros de ida y kilómetros de vuelta. Calcula:
1. Consumo total en l/km (litros / km totales)
2. Rendimiento en km/l (km totales / litros)

Datos de prueba:
Litros: 20
Km ida: 80
Km vuelta: 70

Resultado esperado:
Consumo: 0.13 l/km
Rendimiento: 7.5 km/l
----------------------------------------------------------------
*/

const prompt = require(`prompt-sync`)();

let litros = parseFloat(prompt(`Introduzca los litros de combustible consumidos: `));

let kmIda = parseFloat(prompt(`Introduzca los Km recorridos a la ida: `));

let kmVuelta = parseFloat(prompt(`Introduzca los Km recorridos a la vuelta: `));

let kmTotales = kmIda + kmVuelta;

let consumoTotal = parseFloat(litros / kmTotales).toFixed(2);

let rendimiento = parseFloat(kmTotales / litros).toFixed(2);

console.log(`El consumo total ha sido de: ${consumoTotal}[L/Km]\n El rendimiento ha sido de: ${rendimiento}[Km/L] `);

