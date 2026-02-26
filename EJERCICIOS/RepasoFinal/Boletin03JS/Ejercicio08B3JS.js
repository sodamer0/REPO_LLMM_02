/*

EJERCICIO 8 🔄
Tienes TRES variables: a, b, c. Escribe un programa que haga un intercambio circular:
el valor de a pasa a b, el de b pasa a c, y el de c pasa a a.
No uses arrays ni asignación múltiple.

Antes: a=10, b=20, c=30  
Después: a=30, b=10, c=20 
----------------------------------------------------------------

*/

const prompt = require(`prompt-sync`)();

let a = 10;

let b = 20;

let c = 30;

let aux =0;

console.log(`Antes: a=${a}, b=${b} y c=${c}`);

aux = a;

a = c;

c = b;

b = aux;

console.log(`Después: a=${a}, b=${b} y c=${c}`);


