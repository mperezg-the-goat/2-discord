
let int = setInterval(konometro, 1000);

function konometro(){
let data = new Date();
document.getElementById("konometro").innerHTML = `${data.setHours(0,0,0)}:${data.setMinutes(0,0,0)}:${data.setSeconds(0,0,0)}`;
}


