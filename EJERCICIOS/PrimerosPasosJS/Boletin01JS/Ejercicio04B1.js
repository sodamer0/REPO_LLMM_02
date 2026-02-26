/*
EJERCICIO 4
En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script 
mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.
Si el usuario teclea:
3
2
4
La media de los números es 3
***********************************************************************************
*/

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Introduzca un número: '));

let num2 = parseInt(prompt('Introduzca un segundo número: '));

let num3 = parseInt(prompt('Introduzca un número más: '))

let suma = num1 + num2 + num3;

let valorMedio = suma / 3;

let resultado = parseFloat(valorMedio).toFixed(2);

console.log(`El valor medio de los tres números enteros (${num1}, ${num2} y ${num3}) es ${resultado}`);