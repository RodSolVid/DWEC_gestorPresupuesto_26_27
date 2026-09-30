
"use strict";
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global

let presupuesto = 0;


function mostrarPresupuesto() {
    let mensaje = "Tu presupuesto actual es de " + presupuesto + " €";
    return mensaje;
}

function actualizarPresupuesto(valor) {
    if (typeof valor === "number" || valor >= 0)
    {
        presupuesto = valor;
        return presupuesto;
    }
    else 
    {
        console.log("El valor del presupuesto debe ser un número positivo");
        valor = -1;
        return valor;
    }
}



function CrearGasto(descripcion, valor) {
    this.Descripcion = descripcion;
    
    if (valor > 0)
    {
        this.Valor = valor;
    }
    else{
        valor = 0;
        console.log("El valor del gasto debe ser un número positivo");
    }

    mostrarGasto = function() {
        console.log(`Gasto correspondiente a: ${this.Descripcion} con Valor: ${this.Valor}`);
    }
    actualizarDescripcion = function(nuevaDescripcion) {
        this.Descripcion = nuevaDescripcion;
    }
    actualizarValor = function(nuevoValor) {
        if (nuevoValor > 0)
        {
            this.Valor = nuevoValor;
        }
        else{
            console.log("El valor del gasto debe ser un número positivo");
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
