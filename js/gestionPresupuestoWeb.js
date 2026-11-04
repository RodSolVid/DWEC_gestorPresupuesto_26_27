import { agruparGastos } from "./gestionPresupuesto";

function mostrarDatoEnId(idElemento, valor){
    const Elemento = document.getElementById(idElemento);
    Elemento.textContent = String(valor);
};

function mostrarGastoWeb (idElemento, gasto){
    const Elemento = document.getElementById(idElemento);
    const div_gasto = document.createElement("div");
    div_gasto.className = "gasto";

    const gasto_des = document.createElement("div");
    gasto_des.className = "gasto-descripcion";
    gasto_des.textContent = gasto.descripcion;

    const gasto_fecha = document.createElement("div");
    gasto_fecha.className = "gasto-fecha";
    gasto_fecha.textContent = gasto.fecha;

    const gasto_valor = document.createElement("div");
    gasto_valor.className = "gasto-valor";
    gasto_valor.textContent = gasto.valor;

    const gasto_etiquetas = document.createElement("div");
    gasto_etiquetas.className = "gasto-etiquetas";

    

    for(const eti of gasto.etiquetas){
        const spanEti = document.createElement("span")
        spanEti.className = "gasto-etiquetas-etiqueta";
        spanEti.textContent = eti + " ";
        gasto_etiquetas.append(spanEti);
    }
    
    Elemento.append(div_gasto);
    div_gasto.append(gasto_des, gasto_fecha, gasto_valor, gasto_etiquetas);
    

};

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo){
    const elemento = document.getElementById(idElemento);
    agrup = agruparGastos()

};



export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}