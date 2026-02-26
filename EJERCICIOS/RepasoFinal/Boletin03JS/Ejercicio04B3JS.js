/*

EJERCICIO 4 🔢
Pide al usuario cuántos números quiere introducir, luego pídelos uno a uno con un bucle
y muestra la media de todos ellos.

Ejemplo de interacción:
¿Cuántos números? 3
Número 1: 10
Número 2: 20
Número 3: 30
La media es: 20
----------------------------------------------------------------

*/

const prompt = require('prompt-sync')();

const cantidadNum = parseInt(prompt('Cuántos números enteros va a introducir?: '));

let suma = 0;

for (let i = 1; i <= cantidadNum; i++) {

    let numero = parseInt(prompt(`Numero ${i}: `));

    suma =+ numero;

}

let media = (suma / cantidadNum).toFixed(2);

console.log(`La media es: ${media}`);