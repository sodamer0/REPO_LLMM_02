/*
EJERCICIO 2
En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule 
el área y el perímetro del cuadrado.
El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados.
Lado 40
El area es 1600
El perímetro es 160

*******************************************************************************************
*/

const lado = 40;

const area = lado * lado;

const perimetro = (4 * lado);

console.log("El área de un cuadrado de lado", lado, "es de", area);

console.log("El perímetro de un cuadrado de lado", lado, "es de", perimetro);
