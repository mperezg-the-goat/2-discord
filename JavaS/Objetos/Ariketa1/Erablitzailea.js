class Erabiltzaile{
    constructor(izena,abizena,nan,jaioData,probintzia){
        this._izena = izena;
        this._abizena = abizena;
        this._nan = nan;
        this._jaioData = jaioData;
        this._probintzia = probintzia;
    }

    sortuLogin(izena,abizena,jaioData){
        let izenLetra = this._izena.slice(-1,);
        let databi = this._jaioData.substring(8,10);
        return `${izenLetra}, ${this._abizena}, ${databi}`;
    }

    getAdina(jaioData){
        let gaur = new Date();
        let gurtea = gaur.getFullYear();
        let jurtea = parseInt(this._jaioData);
        let emaitza = gurtea - jurtea;
        return `${emaitza} Urte ditu`;
    }

    toString(){
        return `${this._izena},${this._abizena},${this._nan},${this._jaioData},${this._probintzia} `;
    }

    toHTML(){
        return`<p>${this.izena}-${this.abizena}</br>ID: ${this.nan}</br>${this.jaioData} datan jaio da</br>${this.probintzia} bizi da. </p>`;
    }

    get izena(){return this._izena};
    get abizena(){return this._abizena};
    get nan(){return this._nan};
    get jaioData(){return this._jaioData};
    get probintzia(){return this._probintzia};

    set izena(izena){return this._izena = izena};
    set abizena(abizena){return this._abizena = abizena};
    set nan(nan){return this._nan = nan};
    set jaioData(jaioData){return this._jaioData = jaioData};
    set probintzia(probintzia){return this._probintzia = probintzia};
}