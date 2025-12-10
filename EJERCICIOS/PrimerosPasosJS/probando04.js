/*
EJERCICIO 4 -- CONSUMO DE COMBUSTIBLE
El programa debe solicitar al usuario los kilómetros recorridos por su moto y los litros cosumidos.
Debe mostrar el consumo por kilómetro, calculado como:

litros/kilómetros

Ejemplo:
Litros: 15
Kilómetros 120

*/

const prompt = require("prompt-sync")();
const kilometros = parseDouble(prompt("Introduzca los kilómetros recorridos: "));
const litros = parseDouble(prompt("Introduzca los litros consumidos: "));

const litros_Km = litros / kilometros;

const L_Km = Math.round(litros_Km);

