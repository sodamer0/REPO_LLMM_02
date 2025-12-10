/*
EJERCICIO 1A
1) HAS REALIZADO UNA COMPRA Y CONOCES EL PRECIO DEL ARTÍCULO Y SU PORCENTAJE DE IMPUESTO (IVA).
REA UN SCRIPT QUE CALCULE EL PRECIO FINAL QUE DEBERÁS PAGAR.

PARA OBTENER EL TOTAL, RECUERDA QUE DEBES SUMAR AL PRECIO EL RESULTADO DE MULTIPLICAR EL PRECIO POR EL IVA Y
DIVIDIRLO ENTRE 100.
*/

let precio_articulo = 12;

let iva = precio_articulo * 21/100;

let resultado = precio_articulo + iva;

console.log('El resultado es ' + resultado + '€');

/*
DF1 - SOLO ENUNCIADOS(CONTENIDO)
EJERCICIO 1B - ÁREA Y PERÍMETRO DE UN CUADRADO
  Tienes almacendado en una variable el valor del lado de un cuadrado. Escribe un programa que calcule tanto el área como el perímetro.
  El área se obtiene multiplicando el lado por sí mismo.
  El perímetro se obtiene sumando sus cuatro lados.
*/

const lado_cuadrado = 12;
const area = lado_cuadrado * lado_cuadrado;
const perimetro = 4 * lado_cuadrado;
let perimetro2 = 0;

const lado = 4;

console.log('El área del cuadrado de lado ' + lado_cuadrado + ' es ' + area + ' y el perímetro es ' + perimetro);

for (let i = 1; i <= 4; i++) {
  perimetro2 += lado;
}
  console.log('El perímetro calculado con un \"bucle for\" es ' + perimetro2);

