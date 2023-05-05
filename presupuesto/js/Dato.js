// Clase Dato

class Dato {
    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }


    get descripcion (){
        return this.descripcion;
    }

    set descripcion (descripción){
        this._descripcion = descripcion;
    }


    get valor (){
        return this.valor;
    }

    set valor (descripción){
        this._valor = valor;
    }

}


