console.log(`----------Ejercicio 4.1-------------`)
// Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y represente la solución mediante el diagrama de flujo, el pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado.
let salario = 1500;
let i = 0;
while (i<=6) {
  salario=salario*1.1
  i+=1;
  console.log(`En el año ${i} recibe: ${salario.toFixed(2)}`);
}

console.log("");
console.log(`----------Ejercicio 4.3-------------`)
// Se requiere un algoritmo para determinar, de N cantidades, cuántas son cero, cuántas son menores a cero, y cuántas son mayores a cero. Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para representarlo, utilizando el ciclo apropiado.
let cantidades = [-1, 1, 0 ,1 , -1, 1, 1, 0, -1];
let cero = 0;
let mayor = 0;
let menor = 0;
let j = 0;
while (j<cantidades.length){
  if(cantidades[j]===0){
      cero=cero+1;
  }else if(cantidades[j]>0){
      mayor=mayor+1;
  }else{
      menor=menor+1;
  }
  j+=1;
  }
console.log(`Cantidades iguales a 0: ${cero}`);
console.log(`Cantidades menores a 0: ${menor}`);
console.log(`Cantidades mayores a 0: ${mayor}`);

console.log("");
console.log(`----------Ejercicio 4.9-------------`)
// Un cliente de un banco deposita equis cantidad de pesos cada mes en una cuenta de ahorros. La cuenta percibe un interés fijo durante un año de 10 % anual. Realice un algoritmo para determinar el total de la inversión final de cada año en los próximos N años. Represente la solución mediante el diagrama de flujo, el pseudocódigo y diagrama N/S.

// let deposito = +prompt("Ingrese cantidad de pesos a depositar mensualmente");
// let anios = +prompt("Ingrese plazo en años");
let deposito = 100;
let acumulado = 0;
let anios = 2;
let a = 0;
while (a<anios) {
  acumulado = (acumulado+deposito*12)*1.1;
  a+=1;
  console.log(`Al final del año ${a} tendrá: ${acumulado.toFixed(2)}`);
}

console.log("");
console.log(`----------Ejercicio 4.13-------------`)
// Un vendedor ha realizado N ventas y desea saber cuántas fueron por 10,000 o menos, cuántas fueron por más de 10,000 pero por menos de 20,000, y cuánto fue el monto de las ventas de cada una y el monto global. Realice un algoritmo para determinar los totales. Represente la solución mediante diagrama de flujo, pseudocódigo y diagrama N/S.

let ventas = [5000, 3000, 8000, 10000, 12000, 19000, 18000];
let tramo1 = 0; // <= 10,000
let conteo1 = 0;
let tramo2 = 0; // > 10,000 y <20,000
let conteo2 = 0;
let n = 0;
while (n<ventas.length){
  if(ventas[n]<=10000){
      tramo1=tramo1+ventas[n];
      conteo1=conteo1+1;
  }else if(ventas[n]>10000 && ventas[n]<20000){
      tramo2 = tramo2+ventas[n];
      conteo2=conteo2+1;
  } 
  n+=1;
  }
console.log("Tramo A: Ventas <=10,000");
console.log("Tramo B: Ventas >10,000 y <20,000");

console.log(`En el Tramo A: ${conteo1} ventas sumarizan ${tramo1}`);
console.log(`En el Tramo B: ${conteo2} ventas sumarizan ${tramo2}`);
