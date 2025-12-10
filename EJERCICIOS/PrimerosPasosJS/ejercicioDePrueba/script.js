/*
const barra = document.getElementById("barra");
const texto = document.getElementById("texto");
const inputVendidos = document.getElementById("inputVendidos");
const inputTotal = document.getElementById("inputTotal");
const btnActualizar = document.getElementById("btnActualizar");
*/
// Función que actualiza barra + colores
/*
function actualizarBarra() {
    const vendidos = Number(inputVendidos.value);
    const total = Number(inputTotal.value);

    // Evitar valores inválidos
    if (total <= 0) return;

    const porcentaje = (vendidos / total) * 100;

    // Actualizar ancho de la barra
    barra.style.width = porcentaje + "%";

    // Colores dinámicos
    if (porcentaje < 30) {
        barra.style.backgroundColor = "#e74c3c"; // rojo
    } else if (porcentaje < 70) {
        barra.style.backgroundColor = "#f1c40f"; // amarillo
    } else {
        barra.style.backgroundColor = "#2ecc71"; // verde
    }

    // Texto debajo
    texto.textContent = `${vendidos} / ${total} tickets vendidos`;
}

// Botón
btnActualizar.addEventListener("click", actualizarBarra);

// Ejecutar la primera vez
actualizarBarra();

//CON EXPLICACIONES EL JS
// Obtenemos la referencia al div que actúa como barra de progreso
const barra = document.getElementById("barra");

// Obtenemos el texto donde mostraremos "X / Y tickets vendidos"
const texto = document.getElementById("texto");

// Inputs para que el usuario escriba los tickets vendidos y el total
const inputVendidos = document.getElementById("inputVendidos");
const inputTotal = document.getElementById("inputTotal");

// Botón que el usuario presiona para actualizar los valores
const btnActualizar = document.getElementById("btnActualizar");
*/


// ----------------------------------------------------
// FUNCIÓN PRINCIPAL: Actualiza el medidor de tickets
// ----------------------------------------------------
function actualizarBarra() {

    // Convertimos a número los valores escritos por el usuario
    // (value siempre es texto, por eso usamos Number)
    const vendidos = Number(inputVendidos.value);
    const total = Number(inputTotal.value);

    // Validación: evitamos división entre cero o totales inválidos
    if (total <= 0) return;

    // Calculamos el porcentaje de la barra (qué parte debe llenarse)
    const porcentaje = (vendidos / total) * 100;

    // Ajustamos visualmente la barra al porcentaje calculado
    barra.style.width = porcentaje + "%";

    // Cambiamos el color de la barra dinámicamente según el %:
    // Motivo: ofrecer feedback visual inmediato (poco, medio, mucho)
    if (porcentaje < 30) {
        barra.style.backgroundColor = "#e74c3c"; // Rojo = pocos tickets vendidos
    } else if (porcentaje < 70) {
        barra.style.backgroundColor = "#f1c40f"; // Amarillo = ventas medias
    } else if (porcentaje > 70 && porcentaje < 95) {
        barra.style.backgroundColor = "#0000FF"; // Azul = ventas buenas
    } else {
        barra.style.backgroundColor = "#2ecc71"; // Verde = buenísimas ventas
    }

    // Actualizamos el texto para mostrar los valores exactos
    texto.textContent = `${vendidos} / ${total} tickets vendidos`;
}

// ----------------------------------------------------
// EVENTO DEL BOTÓN: cuando se hace clic, actualizamos la barra
// ----------------------------------------------------
btnActualizar.addEventListener("click", actualizarBarra);

// ----------------------------------------------------
// Ejecutamos la función una vez al cargar la página
// para que la barra muestre el valor inicial
// ----------------------------------------------------
actualizarBarra();