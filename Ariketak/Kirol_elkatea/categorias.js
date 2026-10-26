
function calcularCategoria() {
    const anioActual = new Date().getFullYear();
    let nacimiento;

    do {
        nacimiento = prompt("Introduce tu año de nacimiento:");

        if (nacimiento === null) return;

        nacimiento = Number(nacimiento);

        if (
            !Number.isInteger(nacimiento) ||
            nacimiento < 1900 ||
            nacimiento > anioActual
        ) {
            alert("Año incorrecto. Introduce un año válido.");
        }
    } while (
        !Number.isInteger(nacimiento) ||
        nacimiento < 1900 ||
        nacimiento > anioActual
    );

    const edad = anioActual - nacimiento;

    const categorias = [
        { nombre: "Micros", min: 0, max: 6 },
        { nombre: "Prebenjamín", min: 7, max: 8 },
        { nombre: "Benjamín", min: 9, max: 10 },
        { nombre: "Alevín", min: 11, max: 12 },
        { nombre: "Infantil", min: 13, max: 14 },
        { nombre: "Cadete", min: 15, max: 16 },
        { nombre: "Juvenil", min: 17, max: 18 },
        { nombre: "Junior", min: 19, max: 20 },
        { nombre: "Senior", min: 21, max: Infinity }
    ];

    const categoria = categorias.find(
        c => edad >= c.min && edad <= c.max
    );

    let html = `
        <h2>Categoría deportiva</h2>
        <p>Año de nacimiento: ${nacimiento}</p>
        <p>Edad de referencia en ${anioActual}: ${edad} años</p>
        <h3>Tu categoría es: ${categoria.nombre}</h3>
        <h3>Lista de categorías</h3>
        <ul>
    `;

    categorias.forEach(c => {
        const clase = c.nombre === categoria.nombre
            ? 'class="seleccionado"'
            : "";

        html += `<li ${clase}>${c.nombre}</li>`;
    });

    html += "</ul>";

    document.getElementById("resultado").innerHTML = html;
}
