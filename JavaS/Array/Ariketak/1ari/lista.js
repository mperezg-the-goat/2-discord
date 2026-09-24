class Lista{
constructor(lista){
    this._lista=[];
}
insertarObjIn(object){
    this._lista.unshift(object);
    return `${this._lista.length}`;
}

insertarObjF(object){
this._lista.push(object);
return `${this._lista.length}`;
}
deleteObjIn(object){
this._lista.shift();
return `${this._lista.length}`;
}

deleteObjF(object){
this._lista.pop();
return `${this._lista.length}`;
}
}