import * as gP
    from "./gestionPresupuesto.js"

import * as gPWEB
    from "./gestionPresupuestoWeb.js"

gP.actualizarPresupuesto(1500)


gP.mostrarPresupuesto()

new gP.CrearGasto ("Compra carne", 23.44, "2021-10-06", "casa", "comida");
new gP.CrearGasto ("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida");
new gP.CrearGasto ("Bonobús", 18.60, "2020-05-26", "transporte");
new gP.CrearGasto ("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
new gP.CrearGasto ("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
new gP.CrearGasto ("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");