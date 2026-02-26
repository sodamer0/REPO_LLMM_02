/*

EJERCICIO 9
Pues seguimos con los números. Escribe un script  que dado un número nos devuelva 
true si es un número par y false si es un número impar. No usar condicionales.
numero: 50
¿Es par? : true

*/

const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Introduzca un número entero cualquier para comprobar si es par o impar: '));

let parImpar = (numero % 2)? `${numero} es par` : `${numero} es impar`;

console.log("El resultado es:", parImpar);