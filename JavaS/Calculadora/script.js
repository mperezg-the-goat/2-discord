//Creo las variables que voy a usar:
const num1 = document.getElementById("num1")
const signo = document.getElementById("operador")
const num2 = document.getElementById("num2")
const boton = document.getElementById("calcular")
const pResultado = document.getElementById("Resultado")



//Creo un evento para el boton (En la parentesis ponemos la accion y la funcion ):
boton.addEventListener('click',calcular)

function calcular() {

    const valorNum1 = Number(num1.value)
    const valorNum2 = Number(num2.value)
    const valorsigno = signo.value
    let resultado;

    if( valorsigno == "+"|| valorsigno == "-" || valorsigno == "*" || valorsigno == "/" ){
        
        // Creo las posibilidades para suma, resta, multiplicacion y division:
        switch (valorsigno) {
            case "+":
                resultado = valorNum1 + valorNum2
                pResultado.innerText=" El resultado es " + resultado
                break;
        
            case "-":
                resultado = valorNum1 - valorNum2
                pResultado.innerText=" El resultado es " + resultado
                break;
            
            case "*":
                resultado = valorNum1 * valorNum2
                pResultado.innerText=" El resultado es " + resultado
                break;
            
            case "/":
                resultado = valorNum1 / valorNum2
                pResultado.innerText=" El resultado es " + resultado
                break;

            default:

                break;
        }
    }else{
        pResultado.innerText ="Calculo imposible!"
    }

    
}