const mensaje = document.getElementById("mensaje");
const error = document.getElementById("error");

let numeros =[1,2,3,9,5,6,7,8,9];

const comprobarArray = (numeros) =>{
    let comprueba =[1,2,3,4,5,6,7,8,9];
    comprueba.sort((a,b)=>a-b);
    if(numeros.every((numero,i) => numero === comprueba[i])){
        mensaje.innerText = "Esta bien ordenado";
        error.innerText = "";
    }else{
         mensaje.innerText = "Esta mal ordenado";
            for(let i=0;i<numeros.length;i++){
                if(numeros[i] !== comprueba[i]){
                    error.innerText +=` El error esta en la posicion ${i}, hay un ${numeros[i]} cuando se espera un ${comprueba[i]}\n`;
                    continue;
                }
            }
            console.log("esta mal");
        }
    }

comprobarArray(numeros);