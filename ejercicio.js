//constantes aleatorias del primer ejercicio
const nombre = "Gabriel";
const apellido = "Smith";
const edad = 25;
const mensaje = `Bienvenido ${nombre} ${apellido}!, tienes ${edad} años de edad`;

//constantes del segundo ejercicio
const formulario = document.getElementById("formulario");
const mensajeDiv = document.getElementById("mensajeBienvenidaPersonalizado");

//constantes del tercer ejercicio
const diasVividosDiv = document.getElementById("mensajeDiasVividos");

// mensaje en el HTML (dejo comentado una manera de detectarr la carga del DOM que no use nunca.)
//document.addEventListener("DOMContentLoaded", () => {document.getElementById("mensajeBienvenida").textContent = mensaje;});
window.onload = () => {
    //muestra el mensaje del primer ejercicio
    document.getElementById("mensajeBienvenida").textContent = mensaje;

    //logica del segundo y tercer ejercicio.
    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que se recarge la pag.

        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let edad = document.getElementById("edad").value.trim();

        if (nombre && apellido && edad && !isNaN(edad)) {
            let diasVividos = edad * 365;
            let mensaje = `¡Bienvenido ${nombre} ${apellido}, tienes ${edad} años!`;
            mensajeDiv.textContent = mensaje;
            diasVividosDiv.textContent = `Has vivido ${diasVividos.toLocaleString()} días.`;
        } else {
            mensajeDiv.textContent = "Por favor, completa todos los campos.";
            diasVividosDiv.textContent = "";
        }
    });
};
