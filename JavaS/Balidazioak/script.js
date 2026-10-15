const form = document.getElementById("registro");
const erabiltzailea = document.getElementById("erabiltzailea");
const pasahitza = document.getElementById("password");
const gmail = document.getElementById("gmail");


//Validamos al usuario
const erabiltzaileBalidatu = function(){
    erabiltzailea.setCustomValidity(""); // Limpiamos siempre el mensaje anterior

    if(erabiltzailea.validity.valueMissing){
        erabiltzailea.setCustomValidity("Atala hau utxik dago");
    }else if(erabiltzailea.validity.tooShort){
        erabiltzailea.setCustomValidity("Gutxienez 4 karaktere heuki behar ditu");
    }else if(erabiltzailea.validity.patterMismatch){
        erabiltzailea.setCustomValidity("Bakarrik letrak erabili");
    }
}

//Validamos la contraseña
const pasahitzaBalidatu = function(){
    pasahitza.setCustomValidity("");

    if(pasahitza.validity.valueMissing){
        pasahitza.setCustomValidity("Atala hau utxik dago");
    }else if(pasahitza.validity.tooShort){
        pasahitza.setCustomValidity("Gutxienez 8 karaktere heuki behar ditu");
    }else if(pasahitza.validity.patterMismatch){
        pasahitza.setCustomValidity("Bakarrik leterak eta sinboloak");
    }
}

//Validamos el correo
const gmailBalidatu = function(){
    gmail.setCustomValidity("");

    if (gmail.validity.valueMissing) {
    gmail.setCustomValidity("El gmail es obligatorio");
  } else if (gmail.validity.typeMismatch) {
    gmail.setCustomValidity("Sartu gmail on bat adibidez: izena@dominua.com");
  }
}

// Valida todos los campos a la vez
const inprimakiaBalidatu = function(){
    erabiltzaileBalidatu();
    pasahitzaBalidatu();
    gmailBalidatu();
}


//Interceptar el envio del formulario con preventDefault()
form.addEventListener("submit", (e) =>{
    if(!form.checkValidity()){ //Mira si los aprartados de los fomularios estan balidados
        e.preventDefault(); //Bloquea el envío si hay errores
        form.reportVality();
    }
});