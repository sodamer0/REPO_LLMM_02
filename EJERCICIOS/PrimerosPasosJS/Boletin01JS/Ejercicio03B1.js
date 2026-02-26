/*
EJERCICIO 3
Un poco de interactividad. En este ejercicio debes escribir un programa que 
lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"
Aparecerá el prompt y el usuario escribirá su nombre:
Usuario escribe juan
Hola Juan.

***************************************************************************
*/

const prompt = require('prompt-sync')();

let nombre = prompt('Escriba su nombre, por favor: ');

console.log(`¡Hola!, mi nombre es ${nombre}.`);