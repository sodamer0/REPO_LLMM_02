/*

EJERCICIO 2 🔲
En variables tienes la base y la altura de un rectángulo. Escribe un programa que
calcule área y perímetro, y que además indique si se trata de un cuadrado (base === altura).

Datos de prueba:
Base: 40
Altura: 40

Resultado esperado:
Área: 1600
Perímetro: 160
¿Es cuadrado? true
----------------------------------------------------------------
*/

const prompt = require('prompt-sync')();

let base = parseFloat(prompt('Introduzca el valor de la base: ')).toFixed(2);

let altura = parseFloat(prompt('Introduzca el valor de la altura: ')).toFixed(2);

let areaRec = (base * altura).toFixed(2);

let perimetroRec = 2 * (base + altura);

let esCuadrado = (base===altura) ? "CUADRADO" : "RECTÁNGULO";

console.log(`El área de un ${esCuadrado} de base ${base}cm y altura ${altura}cm es de ${areaRec}cm^2 y su perímetro es de ${perimetroRec}cm.`);