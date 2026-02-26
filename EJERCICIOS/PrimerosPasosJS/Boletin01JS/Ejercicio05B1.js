/*
EJERCICIO 5
Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos 
por su coche y el número de litros consumidos . El script debe mostrar el consumo de 
combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros.
El usuario teclea
Num de litros: 20
Num de kilómetros: 80
Has consumido 0.25 l/km  //   20/80
*************************************************************************************
*/

const prompt = require('prompt-sync')();

let kmRecorridos = parseFloat(prompt('Introduzca los Kms recorridos:'));

let lConsumidos = parseFloat(prompt('Introduzca los L consumidos: '));

let consumoPorKm = lConsumidos / kmRecorridos;

console.log(`Cantidad de litros consumidos: ${lConsumidos}L`);

console.log(`Kilómetros recorridos: ${kmRecorridos}Km`);

let resultado = parseFloat(consumoPorKm).toFixed(2);

console.log(`Ha consumido una media de ${resultado} L/Km.`);
