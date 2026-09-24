//Herencia:
class Mago extends Heroe{
    constructor(nombre,nivel,magia){
        super(nombre,nivel);
        this._magia = magia;
    }

    get magia(){return this._magia}
    set magia(magia){return this._magia = magia}

    saludo(){
        return `Soy ${this._nombre} soy nivel ${this._nivel} y tengo el poder de ${this._magia}`;
    }
}