const user = document.getElementById("erabiltzailea");
const passw = document.getElementById("pasahitza");
const boton = document.getElementById("meterPassword");
const mensaje = document.getElementById("mensaje");

user.addEventListener("focus",function(e){
user.value = "";
});

passw.addEventListener("focus",function(e){
passw.value = "";
});


passw.addEventListener("focusout", function(e) {
    const valor = passw.value;
    let errores = [];

    // Apartado b): longitud entre 7 y 15 caracteres
    if (valor.length < 7 || valor.length > 15) {
        errores.push("La contraseña debe tener entre 7 y 15 caracteres.");
    }

    // Apartado c): mayúscula, minúscula y número
    if (!/[A-Z]/.test(valor) ||
        !/[a-z]/.test(valor) ||
        !/[0-9]/.test(valor)) {
        errores.push("La contraseña debe tener al menos una mayúscula, una minúscula y un número.");
    }

    // Mostrar todos los errores
    mensaje.innerText = errores.join("\n");
});

const temporizador = setTimeout( () =>{
    mensaje.innerText= "¡Corre, mete ya el password!";
}, 10000);


boton.addEventListener("click", function(e){
    clearTimeout(temporizador);
    mensaje.innerText="";
});


boton.addEventListener("click", function(e) {
    e.preventDefault();

    const nombreUsuario = user.value.trim();
    const valor = passw.value;

    const longitudCorrecta =
        valor.length >= 7 && valor.length <= 15;

    const tieneMayuscula = /[A-Z]/.test(valor);
    const tieneMinuscula = /[a-z]/.test(valor);
    const tieneNumero = /[0-9]/.test(valor);

    if (
        nombreUsuario !== "" &&
        longitudCorrecta &&
        tieneMayuscula &&
        tieneMinuscula &&
        tieneNumero
    ) {
        mensaje.innerText = "Los datos introducidos son válidos";
    } else {
        mensaje.innerText = "El usuario o la contraseña no son válidos";
    }
});