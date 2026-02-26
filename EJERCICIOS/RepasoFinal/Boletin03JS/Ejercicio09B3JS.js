/*

EJERCICIO 9 ✨
Escribe un script que, dado un número, devuelva true si es par Y múltiplo de 5,
y false en caso contrario. No uses condicionales (if), solo operadores lógicos y aritméticos.

Ejemplos:
10 → true  (par y múltiplo de 5)
15 → false (impar)
20 → true
7  → false
----------------------------------------------------------------

*/

const prompt = require(`prompt-sync`)();

let numero = prompt('Introduzca un número entero: ');

let esParYM5 = ((numero % 2 == 0) && (numero % 5 == 0 )) ? "True" : "False";

console.log(`El número entero ${numero} es par y múltiplo de 5?.\nRespuesta: ${esParYM5}`);

