//Para crear objetos
class Heroe{
    constructor(nombre, nivel=1){
//Despues del this. poner _
        this._nombre = nombre;
        this._nivel = nivel;
    }
    saludo(){
        return `${this._nombre} dice hola`;
    }

    //getters y setters:

    get nombre(){return this._nombre};
    get nivel(){return this._nivel};
    set nombre(nombre){return this._nombre = nombre};
    set nivel(nivel){return this._nivel = nivel};
}
