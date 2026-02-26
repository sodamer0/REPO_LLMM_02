/*

EJERCICIO 6 ⏱️
Pide al usuario una cantidad de segundos y conviértela a formato horas:minutos:segundos.

Ejemplo:
Segundos: 3665
Resultado: 1:1:5  (1 hora, 1 minuto, 5 segundos)
----------------------------------------------------------------

*/

const prompt = require(`prompt-sync`)();

let segundosIniciales = prompt(`Introduzca los segundos totales: `);

let horasTotales = Math.floor(segundosIniciales / 3600);

let minutosTotales = Math.floor((segundosIniciales % 3600) / 60);

let restoSegundos = segundosIniciales % 60;

console.log(`Resultado: ${horasTotales}:${minutosTotales}:${restoSegundos} (${horasTotales} Hora/s, ${minutosTotales} Minuto/s, ${restoSegundos} Segundo/s)`);