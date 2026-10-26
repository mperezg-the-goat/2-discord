const pantalla=document.getElementById("text");

const nombres=["Markel","Aitzol","Monica"];

for(let nombre of nombres){
    console.log(nombre);
}

const resta = (a,b) => a-b;

pantalla.innerText= resta(4,5);