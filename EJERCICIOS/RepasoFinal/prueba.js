const prompt = require('prompt-sync')();
const cantidadNum = parseInt(prompt('¿Cuántos números? '));
let suma = 0;

for (let i = 1; i <= cantidadNum; i++) {
    let numero = parseInt(prompt(`Número ${i}: `));
    suma += numero;
}

let media = (suma / cantidadNum).toFixed(2);
console.log(`La media es: ${media}`);