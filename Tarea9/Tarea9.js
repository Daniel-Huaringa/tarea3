console.log(`-----------------Ejercicio 5.6-------------------`)
// Realice y represente mediante diagrama de flujo y pseudocódigo un algoritmo que lea los nombres y las edades de diez alumnos, y que los datos se almacenen en dos vectores, y con base en esto se determine el nombre del alumno con la edad mayor del arreglo.

let nombres = [];
let edades = [];
for (let i = 0; i < 10; i++) {
  nombres[i] = prompt(`Ingrese nombre del alumno ${i+1}`);
  edades[i] = +prompt(`Ingrese edad del alumno ${i+1}`);
  if (i===9) {
    break;
  } else {
    nombres.push(nombres[i])
    edades.push(edades[i])
  }
}
// Imprimiendo Vectores
console.log(nombres);
console.log(edades);

// Imprimiendo datos del alumno con mayor edad
let mayor=0;
let nombre="";
for (let i = 0; i<edades.length; i++) {
  if(edades[i]>=mayor){
    mayor=edades[i];
    nombre=nombres[i];
  }
}
console.log(`El alumno de mayor edad es ${nombre}, con ${mayor} años`);


console.log(`-----------------Ejercicio 5.8-------------------`);
// Realice un algoritmo que lea un vector y a partir de el forme un segundo vector, de tal forma que el primer elemento pase a ser el segundo, el segundo pase a ser el tercero, el último pase a ser el primero, y así sucesivamente. Represéntelo mediante un diagrama de flujo.

let origen=[1,2,3,4,5,6,7,8,9,10];
let resultado=[];
for (let j = 0; j < origen.length-1; j++) {
  resultado[0]=origen[origen.length-1];
  resultado[j+1]=origen[j];
}
console.log(resultado);

console.log(`-----------------Ejercicio 5.10-------------------`);
// Realice un algoritmo que lea dos vectores de cien elementos y que calcule la suma de éstos guardando su resultado en otro vector, el cual se debe presentar en forma impresa

let vector1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
let vector2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];

let suma=[];
for (let c = 0; c < vector1.length; c++) {
  let x=vector1[c];
  let y=vector2[c];
  suma[c]=x+y;
}
console.log(`La suma de los vectores es: ${suma}`);