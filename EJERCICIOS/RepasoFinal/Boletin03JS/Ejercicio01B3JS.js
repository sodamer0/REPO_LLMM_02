/*

EJERCICIO 1 💰
Has hecho una compra y conoces el precio del producto, su IVA y un descuento promocional.
Escribe un script que calcule el precio final aplicando primero el IVA y después el
descuento sobre el total con IVA.

Datos de prueba:
Precio: 200€
IVA: 21%
Descuento: 10%

Resultado esperado: 217.80 €

*/

const prompt = require('prompt-sync')();

let precioBase = parseFloat(prompt('Introduzca el precio del producto: '));

let Iva = (21 / 100);

let descuento = (10 / 100);

let precioVenta = precioBase + (precioBase * Iva);

let precioFinal = precioVenta - (precioVenta * descuento);

let resultado = parseFloat(precioFinal).toFixed(2);


console.log(`El precio final del producto de precio base ${precioBase}€ con el Iva del 21% incluido y aplicado un descuento del 10% es de ${resultado}€`);
