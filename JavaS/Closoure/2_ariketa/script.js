const saiakerak =  (aukeraMax) => {
    let intentos = aukeraMax;

    return() => {
        if (intentos === 0) {
            console.log("Acceso bloqueado: sin intentos");
        }else{
            intentos--;
            console.log(`Te quedan ${intentos} intentos`);
        }
    }
}

const intentarLogin = saiakerak(3);
intentarLogin(); 
intentarLogin(); 
intentarLogin(); 
intentarLogin(); 

