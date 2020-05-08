// let seccion1 = document.getElementById("seccion1");

// // onmousemuve => evento que se dispara cada vez que el mouse se mueve sobre un elemento (pixel a pixel)
// seccion1.onmousemove = (e) =>{
//   // muestra en consola las propiedades "offset" del elemento seccion1
//   console.log(`Mouse X: ${e.offsetX}px, Mouse Y: ${e.offsetY}`);
// }

//-----------------------------TAREA---------------------------------------------
// EJERCICIO: crear puntos dentro del body al pasar el mouse
// guardar en => variable 'body' = el elemento con id="body" (el body)
let body = document.getElementById("body");
// al mover el mouse (sobre el) body 'body' => hacer lo siguiente...
body.onmousemove = (e) =>{
  // guardar en => variable 'div' = el elemento con id="div" (un div)
  let div = document.createElement("div");
  // poniendo propiedades al div (absolute, top, left)
  // asignar => estilos del 'div' = ""
  div.style.width = '7px';
  div.style.height = '7px';
  div.style.borderRadius = '50%';
  div.style.backgroundColor="blue";
  div.style.position = "absolute";
  div.style.top = e.offsetY+"px";
  div.style.left = e.offsetX+"px";
  // inyectando el div en el body
  body.appendChild(div);
}
//-----------------------------------------------------------------------------------


// // ---onkeyup => evento que se dispara cada vez que se deja de presionar un tecla en un determinado elemento

// // guardar en => variable 'nombre' = el elemento con id="nombre" (un input)
// let nombre = document.getElementById("nombre");
// // guardar en => variable 'contador' = el elemento con id="contador" (un span)
// let contador = document.getElementById("contador"); 

// // al dejar de presionar una tecla (en el) input 'nombre' => hacer lo siguiente...
// nombre.onkeyup = (e) =>{
//   // console.log(e.key); //---muestra tecla que se dejó de presionar
//   // guardar en => variable 'texto' = el contenido (del) input 'nombre'
//   let texto = nombre.value; 
//   // asignar como => texto interno (del) span 'contador' = la longitud (del) contenido del input 'nombre'
//   contador.innerText = texto.length+" caracteres";

//   // RESUMEN: al dejar de presionar una tecla en el input 'nombre', guardar el contenido ingresado y asignar como texto interno del span 'contador' la longitud de ese contenido.
// }