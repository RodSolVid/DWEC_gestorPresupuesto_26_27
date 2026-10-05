
"use strict";
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global

let gastos = [];
let idGastos = 0;
let presupuesto = 0;


function mostrarPresupuesto() {
    let mensaje = "Tu presupuesto actual es de " + presupuesto + " €";
    return mensaje;
}

function actualizarPresupuesto(valor) {
    if (typeof valor === "number" && valor >= 0)
    {
        presupuesto = valor;
        return valor;
    }
    else 
    {
        console.log("El valor del presupuesto debe ser un número positivo");
        return valor = -1;
    }
}



function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    
    
    if (etiquetas === undefined || etiquetas === null || etiquetas === "") {
        this.etiquetas = [];
    }
    else{
        this.etiquetas = Array.from(etiquetas);
    }

    
    if (fecha === undefined || fecha === null || fecha === "") {
        this.fecha = Date.now();
    }
    else{
        let Fecha = Date.parse(fecha);
        if (isNaN(Fecha)) {
            fecha = Date.now();
        }
        else{
            this.fecha = Fecha;
        }
    }


    valor = parseFloat(valor);
    if (isNaN(valor) || valor < 0) {
        valor = 0;
    } 

    this.descripcion = descripcion;
    this.valor = valor;
   
    this.mostrarGastoCompleto = function() {
        let Fecha = new Date(this.fecha);
        let mensaje = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\nFecha: ${Fecha.toLocaleString()}\nEtiquetas:\n- ${this.etiquetas.join("\n- ")}\n`;
        return mensaje;
    }
    
/*this.mostrarGastoCompleto = function() {
    let Fecha = new Date(this.fecha);
    
    // Formatea fecha y hora exactamente con coma y espacio
    let fechaTexto = `${Fecha.toLocaleDateString('es-ES')}, ${Fecha.toLocaleTimeString('es-ES')}`;
    
    // Une las etiquetas sin espacios extra antes del guion
    let listaEtiquetas = this.etiquetas.map(e => `- ${e}`).join("\n");

    return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\nFecha: ${fechaTexto}\nEtiquetas:\n${listaEtiquetas}`;
}*/


    this.mostrarGasto = function() {
        let mensaje = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
        return mensaje;
    }
    this.actualizarDescripcion = function(nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    }
    this.actualizarValor = function(nuevoValor) {
        nuevoValor = parseFloat(nuevoValor);
        if (!isNaN(nuevoValor) && nuevoValor >= 0) {
            this.valor = nuevoValor;
        }
    }
}

function listarGastos() {
    if (gastos.length === 0) {
        return [];
    }
    else{
        return gastos;
    }
}

function anyadirGasto() {}
function borrarGasto() {}
function calcularTotalGastos() {}
function calcularBalance() {}
// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    listarGastos, 
    anyadirGasto, 
    borrarGasto, 
    calcularTotalGastos, 
    calcularBalance,
    CrearGasto
}
