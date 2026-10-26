
function calcularFCM() {
    let edad, sexo;

    do {
        edad = prompt("Introduce tu edad en años:");

        if (edad === null) return;

        edad = Number(edad);

        if (!Number.isInteger(edad) || edad < 1 || edad > 120) {
            alert("Edad incorrecta. Introduce una edad entre 1 y 120 años.");
        }
    } while (!Number.isInteger(edad) || edad < 1 || edad > 120);

    do {
        sexo = prompt(
            "Introduce tu sexo para esta fórmula: hombre o mujer"
        );

        if (sexo === null) return;

        sexo = sexo.trim().toLowerCase();

        if (sexo !== "hombre" && sexo !== "mujer") {
            alert("Escribe hombre o mujer.");
        }
    } while (sexo !== "hombre" && sexo !== "mujer");

    const fcm = sexo === "hombre" ? 220 - edad : 226 - edad;

    function porcentaje(valor) {
        return Math.round(fcm * valor);
    }

    const zonas = [
        {
            nombre: "Zona de recuperación",
            inicio: 0.60,
            fin: 0.70
        },
        {
            nombre: "Zona aeróbica",
            inicio: 0.70,
            fin: 0.80
        },
        {
            nombre: "Zona anaeróbica",
            inicio: 0.80,
            fin: 0.90
        },
        {
            nombre: "Línea roja",
            inicio: 0.90,
            fin: 1.00
        }
    ];

    let html = `
        <h2>Calculadora de FCM</h2>
        <p>Edad: ${edad} años</p>
        <p>Fórmula de referencia: ${
            sexo === "hombre" ? "220 - edad" : "226 - edad"
        }</p>
        <h3>FCM estimada: ${fcm} pulsaciones por minuto</h3>
        <h3>Zonas de entrenamiento</h3>
        <ul>
    `;

    zonas.forEach(zona => {
        html += `
            <li>
                <strong>${zona.nombre}:</strong>
                ${zona.inicio * 100}%-${zona.fin * 100}%:
                ${porcentaje(zona.inicio)}-${porcentaje(zona.fin)}
                pulsaciones por minuto
            </li>
        `;
    });

    html += "</ul>";

    document.getElementById("resultado").innerHTML = html;
}
