var presupuesto;

/*let egresos = {
    Renta: 900,
    Ropa: 400
};

let ingresos = {
    Quincena: 9000,
    Venta: 400
};*/


const ingresoUno = new Ingreso('Salario', 20000);
const ingresoDos = new Ingreso('Venta Auto', 50000);
const ingresoTres = new Ingreso('Trabajo', 40000);


const egresoUno = new Egreso('Renta', 4000);
const egresoDos = new Egreso('Ropa', 800);
const egresoTres = new Egreso('Servicios', 100);

let ingresos = [ingresoUno, ingresoDos, ingresoTres];
let egresos = [egresoUno, egresoDos, egresoTres];

const cargarCabecero = () => {
    presupuesto = formatoMoneda(totalIngresos() - totalEgresos ());
    porcentajeEgreso = formatoPorcentaje((totalEgresos() / totalIngresos()));
    document.getElementById('presupuesto').innerHTML = presupuesto;
    document.getElementById('porcentaje').innerHTML = porcentajeEgreso;
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
    /*console.log(presupuesto);
    console.log(porcentajeEgreso);
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));*/
} 


const totalIngresos = () => {
    let totalIngreso = 0;

    for (let ingreso of ingresos){
        totalIngreso += ingreso._valor;
    }

    return totalIngreso;
}


const totalEgresos = () => {
    let totalEgreso = 0;

    for (let egreso of egresos){
        totalEgreso += egreso._valor;
    }

    return totalEgreso;
}

// Funcion Moneda

const formatoMoneda = (numeroMoneda) => {
    numeroMoneda = numeroMoneda.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
      }); 

    return numeroMoneda;
}

// Funcion Porcentaje

const formatoPorcentaje = (numeroPorcentaje) => {
    numeroPorcentaje = numeroPorcentaje.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 2
      }); 

    return numeroPorcentaje;
}


const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}


const cargarIngresos = () => {
    let ingresosHTML = "";

    for (let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
        console.log(ingreso._descripcion, ingreso._valor);
    }

    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;

}


const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = 
    `<div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso._descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(ingreso._valor)}</div>
            <div class="elemento_porcentaje">
                21%
            </div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline" onClick="eliminarIngreso(${ingreso._id});"></ion-icon>
                </button>
            </div>
        </div>
    </div>`;
     
    return ingresoHTML;
}


const cargarEgresos = () => {
    let egresosHTML = "";

    for (let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
        console.log(egreso._descripcion, egreso._valor);
    }

    document.getElementById('lista-egresos').innerHTML = egresosHTML;

}


const crearEgresoHTML = (egreso) => {
    let egresoHTML = 
    `<div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso._descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(egreso._valor)}</div>
            <div class="elemento_porcentaje">
                21%
            </div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline" onClick="eliminarEgreso(${egreso._id});"></ion-icon>
                </button>
            </div>
        </div>
    </div>`;
     
    return egresoHTML;
}

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1)
    cargarCabecero();
    cargarEgresos();
}

// Funcion Eliminar Ingreso 

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1)
    cargarCabecero();
    cargarIngresos();
}

// Funcion Agregar Dato 
const agregarDato = (id) => {
    let forma = document.getElementById('forma');
    var select = document.getElementById('tipo');
    var tipo = select.options[select.selectedIndex].value;
    console.log(tipo);

    let descripcion = document.getElementById('descripcion').value;
    let valor = document.getElementById("valor").value;

    if ((descripcion !== "") && (valor !== "")){
        if (tipo === "ingreso"){
            const ingresoNuevo = new Ingreso(descripcion, parseFloat(valor));
            ingresos.push(ingresoNuevo);
        } else {
            const egresoNuevo = new Egreso(descripcion, parseFloat(valor));
            egresos.push(egresoNuevo);
        }

    } else {
        console.log("Es necesario introducir la información requerida"); 
    }
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
    
}


const limpiarDato = () => {
    let descripcionInput = document.getElementById('descripcion');
    let valorInput = document.getElementById("valor");

    if (descripcionInput.value != "") {
        descripcionInput.value = "";
    }

    if (valorInput.value != "") {
        valorInput.value = "";
    }
}   


