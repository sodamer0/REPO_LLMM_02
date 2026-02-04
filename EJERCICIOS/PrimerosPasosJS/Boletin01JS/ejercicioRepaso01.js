let precioTexto = "45.50";

//let input = require('prompt-sync');

let precio = parseFloat(precioTexto);

console.log(precio);

let iva = 0.21;

let iva_precio = (precio * iva).toFixed(1);

console.log(iva_precio);

console.log(`El resultado es ${iva_precio}€`);

alert(iva_precio);