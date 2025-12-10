/*
EJERCICIO -- MEDIA DE TRES NÚMEROS
EL programa debe pedir al usuario tres números enteros y mostrar como resultado la media de los tres.
La media se calcula sumando los tres valores y dividiéndolos entre 3.
Ejemplo de entrada:
6
9
3
*/

const prompt = require ("prompt-sync")();
const num1 = parseInt(prompt("Dame un número: "));
const num2 = parseInt(prompt("Dame otro número: "));
const num3 = parseInt(prompt("Dame otro número: "));

const media = (num1 + num2 + num3) / 3;
const mediaRedondeada = Math.round(media);

console.log("La media de los número introducidos es: " + mediaRedondeada);
