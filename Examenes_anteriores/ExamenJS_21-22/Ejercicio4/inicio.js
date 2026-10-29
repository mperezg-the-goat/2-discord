
const formulario = document.getElementById("formulario");
const contenedorNoticias = document.getElementById("noticias");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Recogemos los datos del formulario.
    const titulo = document.getElementById("titulo").value.trim();
    const texto = document.getElementById("noticia").value.trim();
    const periodista = document.getElementById("periodista").value;
    const url = document.getElementById("url").value.trim();

    // Comprobamos que los dos primeros campos no estén vacíos.
    if (titulo === "" || texto === "") {
        alert("El título y el texto de la noticia son obligatorios.");
        return;
    }

    // Creamos el elemento principal de la noticia.
    const articulo = document.createElement("article");
    articulo.classList.add("noticia");

    // Aplicamos la clase CSS del periodista.
    articulo.classList.add(periodista);

    // Creamos el título h3.
    const encabezado = document.createElement("h3");

    // Creamos el enlace del título.
    const enlace = document.createElement("a");
    enlace.textContent = titulo;

    if (url !== "") {
        enlace.href = url;
        enlace.target = "_blank";
        enlace.rel = "noopener noreferrer";
    } else {
        enlace.href = "#";
    }

    encabezado.appendChild(enlace);

    // Creamos el h2 con el periodista y la fecha.
    const autor = document.createElement("h2");
    const negrita = document.createElement("strong");

    const fecha = new Date().toLocaleDateString("es-ES");

    negrita.textContent = periodista + " - " + fecha;
    autor.appendChild(negrita);

    // Creamos el párrafo con el texto de la noticia.
    const parrafo = document.createElement("p");
    parrafo.textContent = texto;

    // Añadimos los elementos al artículo.
    articulo.appendChild(encabezado);
    articulo.appendChild(autor);
    articulo.appendChild(parrafo);

    // Añadimos la noticia al documento HTML.
    contenedorNoticias.appendChild(articulo);

    // Limpiamos el formulario.
    formulario.reset();
});
