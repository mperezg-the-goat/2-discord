// --- RELOJ ACTUAL ---
const pantallaReloj = document.getElementById("reloj");

const actualizarReloj = () => {
    const ahora = new Date();
    const hora = String(ahora.getHours());
    const minutu = String(ahora.getMinutes());
    const segundu = String(ahora.getSeconds());

    pantallaReloj.innerText =`${hora}:${minutu}:${segundu}`;   
}

setInterval(actualizarReloj,1000);
actualizarReloj;

const pantallaCronometro = document.getElementById("cronometro");
const btnIniciar = document.getElementById("btn-iniciar");
const btnParar = document.getElementById("btn-parar");
const btnReset = document.getElementById("btn-reset");
const btnGuardar = document.getElementById("btn-guardar");
const listaTiempos = document.getElementById("lista-tiempos");

let segundosTotales = 0;
let intervaloCronometro = null;
let estaCorriendo = false;

// Función auxiliar para formatear segundos a formato HH:MM:SS (o MM:SS)
function formatearTiempo(totalSegundos) {
    const horas = String(Math.floor(totalSegundos / 3600)).padStart(2, '0');
    const minutos = String(Math.floor((totalSegundos % 3600) / 60)).padStart(2, '0');
    const segundos = String(totalSegundos % 60).padStart(2, '0');

    return `${horas}:${minutos}:${segundos}`;
}

// 1. Botón INICIAR
btnIniciar.addEventListener("click", () => {
    if (!estaCorriendo) {
        estaCorriendo = true;
        intervaloCronometro = setInterval(() => {
            segundosTotales++;
            pantallaCronometro.innerText = formatearTiempo(segundosTotales);
        }, 1000);
    }
});

// 2. Botón PARAR
btnParar.addEventListener("click", () => {
    clearInterval(intervaloCronometro);
    estaCorriendo = false;
});

// 3. Botón PONER A 0 (Reset)
btnReset.addEventListener("click", () => {
    clearInterval(intervaloCronometro);
    estaCorriendo = false;
    segundosTotales = 0;
    pantallaCronometro.innerText = formatearTiempo(segundosTotales);
});

// 4. Botón GUARDAR VALOR
btnGuardar.addEventListener("click", () => {
    // Creamos un elemento <li> por cada valor guardado
    const nuevoElemento = document.createElement("li");
    nuevoElemento.innerText = formatearTiempo(segundosTotales);
    listaTiempos.appendChild(nuevoElemento);
});