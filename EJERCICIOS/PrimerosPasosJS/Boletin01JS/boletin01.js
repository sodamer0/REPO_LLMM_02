/*
ENUNCIADOS + SOLUCIONES 

EJERCICIO 1
Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.
Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.
Precio 200€
Iva: 21%
El total son 242 €.  //200 + 21*200/100

*******************************************************************************************

EJERCICIO 2
En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados.
Lado 40
El area es 1600
El perímetro es 160

*******************************************************************************************
EJERCICIO 3
Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"
Aparecerá el prompt y el usuario escribirá su nombre:
Usuario escribe juan
Hola Juan.

***************************************************************************
EJERCICIO 4
En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.
Si el usuario teclea:
3
2
4
La media de los números es 3
***********************************************************************************
EJERCICIO 5
Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos . El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros.
El usuario teclea
Num de litros: 20
Num de kilómetros: 80
Has consumido 0.25 l/km  //   20/80
*************************************************************************************
EJERCICIO 6
Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 60 minutos y cada minuto son 60 segundos.
horas : 2
minutos 30
Resultado 2*60*60 + 30*60 = 9000 segundos
          
************************************************************************************
EJERCICIO 7
En este script debes pedir al usuario un número de dos dígitos y debes devolver el número de unidades y de decenas, o sea, cada dígito del número. Usa solo operationes aritméticas
Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto es el número de unidades
Si ese teclea el número 45
Unidades: 5
Decenas: 4

******************************************************************************
EJERCICIO 8
Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.
Teiens que escribir un programa que intercambie el valor de dos variables. Al final la primera variable debe terner el valor de la segunda y la segunda el valor de la primera. No vale usar arrays ni asignación múltiple
Antes:
varUno vale 10, varDos vale 30
Al final
varUno vale 30, varDos vale 10

**************************************************************************************
EJERCICIO 9
Pues seguimos con los números. Escribe un script  que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales.
numero: 50
¿Es par? : true

*/


//EJERCICIO_01//

const precio = 200;
const iva = 21 / 100;
const compra = precio + (precio * iva);


console.log("El precio total de compra, IVA incluído es de", compra,"€");

//EJERCICIO_02//

const lado = 40;
const perimetro = 4 * lado;
const area = lado * lado;

console.log("El área de un cuadrado de lado:", lado, "unidades es de",area, "unidades.");

console.log("El perímetro de un cuadrado de lado:", lado, "unidades es de", perimetro, "unidades.");

//EJERCICIO_03//

const prompt = require('prompt-sync')();

let nombre = prompt('Escribe tu nombre: ');

console.log(`Hola, mi nombre es ${nombre}.`);


//EJERCICIO_04//



let num1 = parseInt(prompt('Introduce un número: '));

let num2 = parseInt(prompt('Introduce otro número: '));

let num3 = parseInt(prompt('Introduce un último número: '));

let suma = num1 + num2 + num3;

let media = parseFloat(suma / 3).toFixed(2);

console.log(`La media de los números: ${num1}, ${num2} y ${num3} es ${media}.`);

//EJERCICIO_05//



let Km_recorridos = parseInt(prompt('Introduce la distancia recorrida: '));

let L_consumidos = parseInt(prompt('Introduce los litros consumidos: '));

let L_Km = (L_consumidos / Km_recorridos);

let resultado = parseFloat(L_Km).toFixed(2);

console.log(`El consumo ha sido de ${resultado} L/Km.`);

//EJERCICIO_06//



let horas = parseInt(prompt('Introduce el número de horas'));