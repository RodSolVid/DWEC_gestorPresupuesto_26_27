import { createElement } from "react";

function mostrarDatoEnId(idElemento, valor){
    const Elemento = document.getElementById(idElemento)
    Elemento.textContent = String(valor);
};

function mostrarGastoWeb (idElemento, gasto){
    const Elemento = document.getElementById(idElemento);
    const div_gasto = createElement("div");
    const gasto_des = createElement("div");
    const gasto_fecha = createElement("div");
    const gasto_valor = createElement("div");
    const gasto_etiquetas = createElement("div");
    document.body.append(div_gasto);
    div_gasto.append(gasto_des, gasto_etiquetas, gasto_valor, gasto_etiquetas);
};

function mostrarGastosAgrupadosWeb(){};
export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}