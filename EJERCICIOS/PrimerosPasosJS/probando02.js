/*
EJERCICIO 2 - SALUDO PERSONALIZADO:
Escribe un programa que pida el nombre al usuario y muestre un saludo que diga "Bienvenido" seguido del nombre escrito.
Para pedir el nombre, usa un prompt con un mensaje como "Introduce tu nombre".
Ejemplo:
El usuario escribe: María
Resultado: Bienvenida María. 
*/


const prompt = require ("prompt-sync")();

const usuario = prompt ("Cuál es tu nombre?");

console.log("Bienvenido: " + usuario);