
function mostrarHorarios() {
    const diasLaborables = [
        "Lunes", "Martes", "Miércoles",
        "Jueves", "Viernes"
    ];

    const diasSemana = [
        "Lunes", "Martes", "Miércoles", "Jueves",
        "Viernes", "Sábado", "Domingo"
    ];

    function crearTabla(titulo, dias, horas) {
        let html = `<h3>${titulo}</h3>`;
        html += "<table><thead><tr>";
        html += "<th>Hora</th>";

        dias.forEach(dia => {
            html += `<th>${dia}</th>`;
        });

        html += "</tr></thead><tbody>";

        horas.forEach(hora => {
            html += `<tr><th>${hora}</th>`;

            dias.forEach(() => {
                html += "<td>—</td>";
            });

            html += "</tr>";
        });

        html += "</tbody></table>";

        return html;
    }

    const horasManana = [
        "9:00-11:00",
        "11:00-13:00",
        "13:00-15:00"
    ];

    const horasTarde = [
        "16:00-17:00",
        "17:00-18:00",
        "18:00-19:00",
        "19:00-20:00",
        "20:00-21:00"
    ];

    let html = "<h2>Horarios de la asociación</h2>";

    html += crearTabla(
        "Horario de mañana",
        diasLaborables,
        horasManana
    );

    html += crearTabla(
        "Horario de tarde",
        diasSemana,
        horasTarde
    );

    document.getElementById("resultado").innerHTML = html;
}
