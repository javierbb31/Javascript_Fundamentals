// Clase Ingreso

class Egreso extends Dato {
    static  contadorEgresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._descripcion = descripcion;
        this._valor = valor;

        this._id = ++Egreso.contadorEgresos;
    }

    get id (){
        return this._id;
    }

}