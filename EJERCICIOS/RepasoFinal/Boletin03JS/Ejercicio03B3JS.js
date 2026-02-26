/*

EJERCICIO 3 🕐
Pide al usuario su nombre con un prompt y salúdale con "Buenos días", "Buenas tardes"
o "Buenas noches" según la hora actual del sistema.

- Mañana: 6:00 - 12:59 → "Buenos días"
- Tarde: 13:00 - 20:59 → "Buenas tardes"  
- Noche: 21:00 - 5:59 → "Buenas noches"


----------------------------------------------------------------

*/

const prompt = require('prompt-sync')();

const hora = new Date();

const tiempo = hora.getHours() * 60 + hora.getMinutes();

const instante = (tiempo >= 360 && tiempo <= 780) ? "Buenos días" : (tiempo >= 720 && tiempo < 1200 ? "Buenas tardes" : "Buenas noches");

const nombre = prompt('¿Como te llamas? ');

console.log(`${instante}, ${nombre}.`);