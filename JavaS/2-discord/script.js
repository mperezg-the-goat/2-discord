// Erabiltzaileak array-a sortu:
let erabiltzaileak = [ { id: 1, izena: "Markel", puntuak: 30, rol: "Lurker" }, 
    { id: 2, izena: "Irune", puntuak: 80, rol: "Member" },
    { id: 3, izena: "Aratz", puntuak: 15, rol: "Lurker" },
    { id: 4, izena: "Ekaitz", puntuak: 120, rol: "VIP" } ];

//erakutsiErabiltzaileak();
for (let i = 0; i<erabiltzaileak.length; i++) {
    console.log(erabiltzaileak[i].izena + " - " + erabiltzaileak[i].puntuak + " - " + erabiltzaileak[i].rol);
}

//erakutsiErabiltzailea(id): 
function erakutsiErabiltzailea(id){
    erabiltzailea = erabiltzaileak.find(e=>e.id==id)
    return erabiltzailea;
}
    erakutsiErabiltzailea(3);
    console.log(erabiltzailea);