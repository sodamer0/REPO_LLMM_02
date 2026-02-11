const acierto = 2;
let input = require('prompt-sync')();

function pedirNumeroValido(nombre) {
    let num;
    do {
        num = parseInt(input(`${nombre}, elija un número entre 1 y 3: `));
        if (isNaN(num) || num < 1 || num > 3) {
            console.log("Número inválido. Debe ser 1, 2 o 3.");
        }
    } while (isNaN(num) || num < 1 || num > 3);
    return num;
}

// Pedir número a 3 personas
let persona1 = pedirNumeroValido("Persona 1");
let persona2 = pedirNumeroValido("Persona 2");
let persona3 = pedirNumeroValido("Persona 3");

// Función para verificar si acertó
function verificarNum(numero, nombre) {
    if (numero === acierto) {
        console.log(`${nombre} ha acertado.`);
    } else {
        console.log(`${nombre} no ha acertado.`);
    }
}

// Verificar resultados
verificarNum(persona1, "Persona 1");
verificarNum(persona2, "Persona 2");
verificarNum(persona3, "Persona 3");