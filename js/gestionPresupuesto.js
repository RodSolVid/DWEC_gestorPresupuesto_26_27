
"use strict";
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global

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



function CrearGasto(descripcion, valor) {
    
    valor = parseFloat(valor);
    if (isNaN(valor) || valor < 0) {
        valor = 0;
    } 

    this.descripcion = descripcion;
    this.valor = valor;

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

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
