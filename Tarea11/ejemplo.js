let inputNombre = document.getElementById("nombre");
let inputRuc = document.getElementById("ruc");
let inputFecha = document.getElementById("fecha");
let inputNro = document.getElementById("nro");

let inputDescripcion = document.getElementById("inputDescripcion");
let inputCantidad = document.getElementById("inputCantidad");
let inputPunit = document.getElementById("inputPunit");
let inputPtotal = document.getElementById("inputPtotal");

let tbody = document.getElementById("tbody");
let inputTotal = document.getElementById("inputTotal")
// BOTONES
let form = document.getElementById("form");
let guardar = document.getElementById("inputGuardar");

let facturas = []
let detalle = [];
let total = 0;

//Funciones 

// Función para crear filas en la tabla HTML ---LISTO
const dibujarFilas = () => {
  // 1. limpia la tabla
    tbody.innerHTML = "";
  // 2. recorre el arreglo detalle para...
  detalle.forEach(f => {
    // 2.1. crea elento tr 
    let tr= document.createElement("tr");
    // 2.2. crea elemento 'td1' (un td de html)
    let td1 = document.createElement("td");
    // 2.2.1. asignar como texto interno del 'td1' el atributo 'cantidad' del objeto 'objFila'
    td1.innerText = f.cantidad;
    // 2.2.2. inyectar el 'td1' en el elemento 'tr'
    tr.appendChild(td1);
    // 2.3 crear elemento 'td2' para asignarle como texto interno el valor de atributo 'descripcion' del objeto 'objFila', luego inyectarlo en el elemento 'tr'
    let td2 = document.createElement("td");
    td2.innerText = f.descripcion;
    tr.appendChild(td2);
    // 2.4 repetir para precio unitario en td3
    let td3 = document.createElement("td");
    td3.innerText = f.pUnit;
    tr.appendChild(td3);
    // 2.5 repetir para precio total en td4
    let td4 = document.createElement("td");
    td4.innerText = f.pTotal;
    tr.appendChild(td4);     
    // 2.6 inyectar todo en el elemento 'tbody' 
    tbody.appendChild(tr);
  })
}

// Función para 
const borrarFilas = () => {
  // borrar inputs del encabezado
  inputNombre.value = "";
  inputRuc.value = "";
  inputFecha.value = "";
  inputNro.value = "";
  inputTotal.innerText = "";
  // remover filas
  for (let i = 0; i < detalle.length+1; i++) {
    let tr = document.querySelector("tr");
    tr.remove();
  }
};

//Eventos

inputPunit.onchange = () =>{
    inputPtotal.value = inputCantidad.value*inputPunit.value;
}

inputPunit.onkeyup = () =>{
    inputPtotal.value = inputCantidad.value*inputPunit.value;
}

inputCantidad.onchange = () =>{
    inputPtotal.value = inputCantidad.value*inputPunit.value;
}

inputCantidad.onkeyup = () =>{
    inputPtotal.value = inputCantidad.value*inputPunit.value;
}

// evnetos onSubmit
form.onsubmit = (e) => {
  e.preventDefault();
  // crear objeto 'objFila' ---LISTO
  let objFila = {
      cantidad: inputCantidad.value,
      descripcion : inputDescripcion.value,
      pUnit: inputPunit.value,
      pTotal : inputCantidad.value*inputPunit.value
  }
  // agregar objeto al arreglo detalle ---LISTO
  detalle.push(objFila);
  // función limpiar: ---LISTO
  inputCantidad.value = "";
  inputDescripcion.value = "";
  inputPunit.value = "";
  inputPtotal.value = "";
  // recalcular totales
  total += objFila.pTotal;
  // inyectar filas
  dibujarFilas();
  // asignar total al 'total'
  inputTotal.innerText = total;
  }

guardar.onclick = () => {
    let objFactura = {
        nombre : inputNombre.value,
        ruc : inputRuc.value,
        fecha : inputFecha.value,
        nro : inputNro.value,
        total ,
        detalle 
    }

    facturas.push(objFactura)
    let facturasString = JSON.stringify(facturas);
    localStorage.setItem("facturas", facturasString);
    
    borrarFilas();
    detalle = [];
}