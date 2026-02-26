/*
EJERCICIO 7
En este script debes pedir al usuario un número de dos dígitos y debes devolver
el número de unidades y de decenas, o sea, cada dígito del número. Usa solo 
operaciones aritméticas
Recuerda si divides un número entre 10 el cociente entero es el número de decenas 
y el resto es el número de unidades
Si ese teclea el número 45
Unidades: 5
Decenas: 4

******************************************************************************
*/

const prompt = require('prompt-sync')();
/*
let numero = parseInt(prompt('Introduzca un número cualquiera: '));

let numeroInicial = numero;

let digitosNum = 0;
let aux = numero;

while (aux > 0) {

    aux = Math.floor(aux / 10);
    digitosNum++;
}

console.log(`El número dado tiene ${digitosNum} dígitos.`);

for (let i = 0; i < digitosNum; i++) {
    const digito = numero % 10;
    console.log(`Dígito ${i + 1}: ${digito}`);
    numero = Math.floor(numero / 10);
}
*/

const numeroDosDigitos = parseInt(prompt('Introduzca un número entero de dos cifras: '));

let digitoUnidades = (numeroDosDigitos % 10);

let digitoDecenas = Math.floor(numeroDosDigitos / 10);

console.log(`El número introducido es el ${numeroDosDigitos}.`);

console.log(`Dígito decenas: ${digitoDecenas}`);

console.log(`Dígito unidades: ${digitoUnidades}`);