//Creo el array:
let jugadores =[];

//Creo los 3 jugadores:
const jugador1 = new Jugador("MP",3,true,false,77);
const jugador2 = new Jugador("Perezosos",2,true,true,1);
const jugador3 = new Jugador("Gordus777",3,false,false,77);

//meto los Jugadores en el array:
jugadores.push(jugador1,jugador2,jugador3);
console.log(jugadores.length);

console.log(jugador1.toString());
console.log(jugador2.toString());
console.log(jugador3.toString());

//Creo el metodo imprime:
function imprime(){
    const mensaje = document.getElementById("jugadores");
   const j = jugadores.forEach(jugador => mensaje.innerText += `${jugador}\n`);
   return j;
}

imprime();

//creo el metodo ruleta rusa;
function ruleta_rusa(){
    let numero = Math.floor(Math.random()* jugadores.length);
    switch (numero) {
        case 0:
            jugador1.numeroVidas = 0;
            break;
           
        case 1:
            jugador2.numeroVidas = 0;
            break;

        case 2:
            jugador3.numeroVidas = 0;
            break;
    
        default:
            break;
    }
}

ruleta_rusa();

imprime();