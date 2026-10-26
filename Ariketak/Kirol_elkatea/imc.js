
function calcularIMC() {
    let altura, peso;

    do {
        altura = prompt("Introduce tu altura en centímetros:");
        if (altura === null) return;
        altura = Number(altura);

        if (!Number.isFinite(altura) || altura <= 0) {
            alert("Altura incorrecta. Inténtalo de nuevo.");
        }
    } while (!Number.isFinite(altura) || altura <= 0);

    do {
        peso = prompt("Introduce tu peso en kilogramos:");
        if (peso === null) return;
        peso = Number(peso);

        if (!Number.isFinite(peso) || peso <= 0) {
            alert("Peso incorrecto. Inténtalo de nuevo.");
        }
    } while (!Number.isFinite(peso) || peso <= 0);

    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);

    const categorias = [
        { min: -Infinity, max: 16, texto: "Peso inferior al normal (delgadez severa)" },
        { min: 16, max: 17, texto: "Peso inferior al normal (delgadez moderada)" },
        { min: 17, max: 18.5, texto: "Peso inferior al normal (delgadez aceptable)" },
        { min: 18.5, max: 25, texto: "Peso normal" },
        { min: 25, max: 30, texto: "Sobrepeso" },
        { min: 30, max: 35, texto: "Obesidad (tipo I)" },
        { min: 35, max: 40.01, texto: "Obesidad (tipo II)" },
        { min: 40.01, max: Infinity, texto: "Obesidad (tipo III)" }
    ];

    const indice = categorias.findIndex(
        c => imc >= c.min && imc < c.max
    );

    let html = `
        <h2>Calculadora de IMC</h2>
        <p>Altura: ${altura} cm</p>
        <p>Peso: ${peso} kg</p>
        <h3>Tu IMC es: ${imc.toFixed(2)}</h3>
        <h3>Clasificación</h3>
        <ul>
    `;

    categorias.forEach((categoria, i) => {
        const clase = i === indice ? 'class="seleccionado"' : "";
        html += `<li ${clase}>${categoria.texto}</li>`;
    });

    html += "</ul>";

    document.getElementById("resultado").innerHTML = html;
}
