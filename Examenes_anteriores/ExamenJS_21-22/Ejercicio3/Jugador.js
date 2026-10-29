class Jugador{
    constructor(nombre,numeroVidas,tienePistola,tieneGranada,numeroBalas){
        this._nombre = nombre;
        this._numeroVidas = numeroVidas;
        this._tienePistola = tienePistola;
        this._tieneGranada = tieneGranada;
        this._numeroBalas = numeroBalas;

        if(tienePistola === false){
            this._numeroBalas = 0;
        }
    }

    get nombre(){return this._nombre};
    get numeroVidas(){return this._numeroVidas};
    get tienePistola(){return this._tienePistola};
    get tieneGranada(){return this._tieneGranada};
    get numeroBalas(){return this._numeroBalas};

    set nombre(nombre){return this._nombre = nombre};
    set numeroVidas(numeroVidas){return this._numeroVidas = numeroVidas};
    set tienePistola(tienePistola){return this._tienePistola = tienePistola};
    set tieneGranada(tieneGranada){return this._tieneGranada = tieneGranada};
    set numeroBalas(numeroBalas){return this._numeroBalas = numeroBalas};

    toString(){
        let descripcion = `El jugador ${this._nombre} tiene ${this._numeroVidas} vidas, `;

        if(this._tienePistola){
            descripcion += `tiene pistola con ${this._numeroBalas} balas`;
        }else{
            descripcion += `no tiene pistola`;
        }

        if(this._tieneGranada){
            descripcion += `y granadas.`;
        }else{
            descripcion += `y no tiene granadas.`;
        }

        return descripcion;
    }
}