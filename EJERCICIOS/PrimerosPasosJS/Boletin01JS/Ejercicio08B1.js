/*
EJERCICIO 8
Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro:
entiendes las variables.
Tienes que escribir un programa que intercambie el valor de dos variables.
Al final la primera variable debe terner el valor de la segunda y la segunda el valor de
la primera. No vale usar arrays ni asignación múltiple.
Antes:
varUno vale 10, varDos vale 30
Al final
varUno vale 30, varDos vale 10

**************************************************************************************
*/

let varUno = 10;

let varDos = 30;

console.log("varUno vale: ",varUno,"y varDos vale:",varDos);

console.log(`varUno vale ${varUno} y varDos vale ${varDos}`);

let aux1 = varUno;

varUno = varDos;

varDos = aux1;

console.log("varUno ahora vale",varUno,"y varDos ahora vale",varDos);

console.log(`varUno ahora vale ${varUno} y varDos ahora vale ${varDos}`);



