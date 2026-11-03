function mostrarDatoEnId(idElemento, valor){
    const Elemento = document.getElementById(idElemento);
    Elemento.textContent = String(valor);
};

function mostrarGastoWeb (idElemento, gasto){
    const Elemento = document.getElementById(idElemento);
    const div_gasto = document.createElement("div");
    div_gasto.className = "div_gasto";
    const gasto_des = document.createElement("div");
    gasto_des.className = "gasto_des";
    gasto_des.textContent = gasto.descripcion;
    const gasto_fecha = document.createElement("div");
    gasto_fecha.className = "gasto_fecha";
    gasto_fecha.textContent = gasto.fecha;
    const gasto_valor = document.createElement("div");
    gasto_valor.className = "gasto_valor";
    gasto_valor.textContent = gasto.valor;
    const gasto_etiquetas = document.createElement("div");
    gasto_etiquetas.className = "gasto_etiquetas";

    

    Elemento.append(div_gasto);
    div_gasto.append(gasto_des, gasto_fecha, gasto_valor, gasto_etiquetas);

    for(const eti of gasto.etiquetas){
        eti = document.createElement("span");
        eti.className = "gasto_etiquetas-etiqueta";
        gasto_etiquetas.append(eti);
        eti.textContent = gasto.etiquetas;
    }
};

function mostrarGastosAgrupadosWeb(){};



export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}