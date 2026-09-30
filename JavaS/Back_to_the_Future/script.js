window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById("calcular").addEventListener("click", calcularFechas);
}



function calcularFechas(){

const mes = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AGU','SEP','OCT','NOV','DEC'];


let Ma = document.getElementById("presenteMes").value;
let Da = document.getElementById("presenteDia").value;
let Aa = document.getElementById("presenteAno").value;
let Ha = document.getElementById("presenteHora").value;
let Mia = document.getElementById("presenteMinuto").value;

let MP = document.getElementById("destinoMes").value;
let DP = document.getElementById("destinoDia").value;
let AP = document.getElementById("destinoAno").value;
let HP = document.getElementById("destinoHora").value;
let MiP = document.getElementById("destinoMinuto").value;

let mesA = mes.indexOf(Ma);
let mesP = mes.indexOf(MP);
//console.log(mesA);

let presente = new Date(Aa,mesA,Da,Ha,Mia);
let destino = new Date(AP,mesP,DP,HP,MiP);
//console.log(presente);

let dif = presente - destino;

if (dif === 0) {
    console.log("No te has movido en el tiempo.");
    return;
  }

  // Determinamos el sentido del viaje
  let sentido = dif > 0 ? "futuro" : "pasado";
  let difAbsoluta = Math.abs(dif);

const MS_POR_MINUTO = 1000 * 60;
const MS_POR_HORA = MS_POR_MINUTO * 60;
const MS_POR_DIA = MS_POR_HORA * 24;
const MS_POR_ANO = MS_POR_HORA * 365;

//Cálculo progresivo de unidades
  let anos = Math.floor(difAbsoluta / MS_POR_ANO);
  let resto = difAbsoluta % MS_POR_ANO;

console.log(resto);

  let dias = Math.floor(resto / MS_POR_DIA);
  resto %= MS_POR_DIA;

  let horas = Math.floor(resto / MS_POR_HORA);
  resto %= MS_POR_HORA;

  let minutos = Math.floor(resto / MS_POR_MINUTO);

let resultado = `Viajarás al ${sentido} ${anos} años, ${dias} días, ${horas} horas y ${minutos} minutos.`;
  console.log(resultado);
}