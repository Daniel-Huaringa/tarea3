// VARIABLES-------------------------

// Elementos cabecera
let inputRazon = document.getElementById("inputRazon");
let inputRuc = document.getElementById("inputRuc");
let inputFecha = document.getElementById("inputFecha");
let inputNro = document.getElementById("inputNro");
// Elementos detalle
let inputDesc = document.getElementById("inputDesc");
let inputCant = document.getElementById("inputCant");
let inputPu = document.getElementById("inputPu");
let inputPt = document.getElementById("inputPt");
// Elementos tabla y total
let tablaDetalle = document.getElementById("tablaDetalle");
let totalFactura = document.getElementById("totalFactura");

// Botones
let agregar = document.getElementById("agregar");
let guardar = document.getElementById("guardar");

// Arreglos
let facturas = [];
let listaArticulos = [];


// FUNCIONES-------------------------

// I. Función para crear filas en la tabla HTML (LISTO)
const agregarFila = () => {
  // 1. limpiar tabla
  tablaDetalle.innerHTML = "";
  // 2. recorrer el arreglo 'listaArticulos' para...
  listaArticulos.forEach(a => {
    // 2.1. crear elemento 'tr' (un tr de HTML)
    let tr = document.createElement("tr");
    // 2.1.1. asignar clase 'cuerpo' al elemento 'tr' 
    tr.setAttribute("class","cuerpo");
    // 2.2. crear elemento 'td1' (un td de html)
    let td1 = document.createElement("td");
    // 2.2.1. asignar como texto interno del 'td1' el atributo 'descripcion' del objeto 'articulo'
    td1.innerText = a.descripcion;
    // 2.2.2. inyectar el 'td1' en el elemento 'tr'
    tr.appendChild(td1);
    // 2.3 crear elemento 'td2' para asignarle como texto interno el valor de atributo 'cantidad' del objeto 'articulo', luego inyectarlo en el elemento 'tr'
    let td2 = document.createElement("td");
    td2.innerText = a.cantidad;
    tr.appendChild(td2);
    // 2.4 repetir para atributo 'precioU' en 'td3'
    let td3 = document.createElement("td");
    td3.innerText = a.precioU;
    tr.appendChild(td3);
    // 2.5 repetir para atributo 'precioT' en 'td4'
    let td4 = document.createElement("td");
    td4.innerText = a.precioT;
    tr.appendChild(td4);     
    // 2.6. inyectar todo en el elemento 'tablaDetalle' 
    tablaDetalle.appendChild(tr);
  })
}

// II. Funciones para limpiar datos (LISTO)
const limpiarInputs = () => {
  inputDesc.value = "";
  inputCant.value = "";
  inputPu.value = "";
  inputPt.value = "";
};
const limpiarFactura = () => {
  // borrar inputs encabezado
  inputRazon.value = "";
  inputRuc.value = "";
  inputFecha.value = "";
  inputNro.value = "";
  totalFactura.value = "";

  // remover filas ----------------------REVISAR-------------
  for (let i = 0; i < listaArticulos.length+1; i++) {
    let tr = document.querySelector(".cuerpo");
    tr.remove();
  }

};


// III. Función para recalcular totales
const RecalcularTotal = () =>{
  // 1. crear variable 'total'
  let total = 0;
  // 2. recorrer arreglo 'listaArticulos' para...
  listaArticulos.forEach(art => {
    // 2.1 sumar el valor de 'precioT' para cada elemento
    total += art.precioT;
  });
  // 3. asingar al input 'totalFactura' el valor 'total'
  totalFactura.value = total;
}

// IV. Función para evento 'onclick' del botón 'guardar' (LISTO)
const agregaArticulo = (e) => {
  e.preventDefault();
  // 1. crear arreglo 'articulo' para datos de cada artículo
  let articulo={
    cantidad: inputCant.value,
    descripcion: inputDesc.value,
    precioU: inputPu.value,
    precioT: inputPu.value * inputCant.value
  }
  // 2. agregar objeto 'articulo' al arreglo 'listaArticulos'
  listaArticulos.push(articulo);
  // 3. convertir a String
  listaArticulosString = JSON.stringify(listaArticulos);
  // 4. almacenar en localstorage
  localStorage.setItem('Lista de articulos',listaArticulosString);
  // 5. inyectar filas HTML
  agregarFila();
  // 6. recalcular totales
  RecalcularTotal();
  // 7. limpiar imputs
  limpiarInputs();
  // 8. llevar cursor a 'inputDesc'
  inputDesc.focus();
};

// V. Función para guardar facturas
const guardarFactura = () =>{
  // 1.crear arreglo de factura
  let factura = {
    razon: inputRazon.value,
    ruc: inputRuc.value,
    fecha: inputFecha.value,
    nro: inputNro.value,
    total: totalFactura.value,
    articulos: listaArticulos
  };
  // 2.agregar objeto 'factura' al arreglo 'facturas'
  facturas.push(factura);
  // 3.convertir a String
  facturasString=JSON.stringify(facturas);
  // 4.almacenar en localstorage
  localStorage.setItem("facturas",facturasString);
  // 5.limpiar datos
  limpiarFactura();
  // 6.remover articulos del localstorage
  localStorage.removeItem('Lista de articulos');
}


// EVENTOS-------------------------

// 1. Calcular precio total del artículo al registrar cantidad y preci (LISTO)
const precioTotal = () => {
  inputPt.value = inputPu.value * inputCant.value;
};

inputPu.onkeyup = precioTotal;
inputPu.onchange = precioTotal;
inputCant.onkeyup = precioTotal;
inputCant.onchange = precioTotal;

// 2. Agrgar artículo al hacer click en 'agregar'
agregar.onclick = agregaArticulo;

// 3. Guardar factura al hacer click en 'guardar'
guardar.onclick = guardarFactura;
