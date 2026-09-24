/*function gehiketa(a,b){
    return a + b;
}
console.log(gehiketa(5,3));

function gehiketa(a,b){
    return a - b;
}

console.log(gehiketa(5,3));*/
// Forma mas corta:
const sumar = (a,b) => a+b;
console.log(sumar(7,8));

const Iva = (x)=> x*1.21;
console.log(Iva(3));

const kaixo = () => console.log("Kaixo mundua");
kaixo();

//Closure:

const sortukontadorea = () =>{
    let kontador = 100;
    return() =>{
        kontador++;
        return kontador++;
    }
    //return () => kontadorea++;
    }
    const handitu = sortukontadorea();
    console.log(handitu());
    console.log(handitu());
    console.log(handitu());
    console.log(handitu());

//---------------------------------------------------
    const sortukontua = function(saldoInicial){
        let saldo = saldoInicial;

        return{
            sartuDirua(kantitatea){
                saldo += kantitatea;
                return `Dirua sartu da. Sadoa ${saldo}`;
            }
            ,ikusiSaldo(){
                return `Zure saldoa ${saldo} € da`;
            }
        }
    }

    const markelaurrekontua = sortukontadorea(1000);
    console.log(markelaurrekontua.ikusiSaldo());
    console.log(markelaurrekontua.sartuDirua(1000));
    console.log(markelaurrekontua.ikusiSaldo());

    console.log(saldo);