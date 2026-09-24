window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById("calcular").addEventListener("click", calcularFechas);
}

function calcularFechas(){

let mesActual = getElementById("presenteMes").value;
let diaActual = getElementById("presenteDia").value;
let anoActual = getElementById("presenteAno").value;
let horaActual = getElementById("presenteHora").value;
let minutoActual = getElementById("presenteMinuto").value;

let mesPasa = getElementById("destinoMes").value;
let diaPasa = getElementById("destinoDia").value;
let anoPasa = getElementById("destinoAno").value;
let horaPasa = getElementById("destinoHora").value;
let minutoPasa = getElementById("destinoMinuto").value;

let mesT = "OCT";
const mes = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
let balio = mes.indexOf(mesT);

let presente = new Date(anoActual,mesActual,diaActual,horaActual,minutoActual);
let pasado = new Date(anoPasa,mesPasa,diaPasa,horaPasa,mesPasa); 

let dif = pasado - presente;

dif /= 1000 *60;

let dif1 = dif % 60;

dif = Math.floor(dif/60);

let dif2 = dif %24;

dif = Math.floor(dif/24);

let dif3 = dif %365;

dif = Math.floor(dif/365);

mensaje.textContent = "Urte:"+dif1+" Hordu: "+dif2+" Egun: "+dif3;

}
