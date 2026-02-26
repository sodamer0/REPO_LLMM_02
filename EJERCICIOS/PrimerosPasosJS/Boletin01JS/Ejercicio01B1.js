/*
EJERCICIO 1
Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule
el precio total que vas a pagar por tu compra.
Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar
el precio base por el iva y dividir por 100.
Precio 200€
Iva: 21%
El total son 242 €.  //200 + 21*200/100

*******************************************************************************************
*/

const precioProducto = 200;

const IVA = (21 / 100);

const resultado = precioProducto + (precioProducto * IVA);

console.log ("El precio total de compra de producto es de", resultado, "€.");

