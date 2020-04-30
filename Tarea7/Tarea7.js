console.log(`---------Ejercicio 3.2-------------`)
// 3.2 Realice un algoritmo para determinar el sueldo semanal de un trabajador con base en las horas trabajadas y el pago por hora, considerando que después de las 40 horas cada hora se considera como excedente y se paga el doble. Construya el diagrama de flujo, el pseudocódigo y el diagrama.

// let horas = +prompt("Ingrese cantidad de horas")
let horas = 42;
let costoHora = 1;
let sueldo = 0;

if (horas <= 40) {
  sueldo = horas * costoHora
} else {
  sueldo = 40 * costoHora + (horas - 40)*costoHora*2
}
console.log(`El sueldo semanal es S/${sueldo}`)

console.log(`---------Ejercicio 3.3-------------`)
// 3.3 El 14 de febrero una persona desea comprarle un regalo al ser querido que más aprecia en ese momento, su dilema radica en qué regalo puede hacerle, las alternativas que tiene son las siguientes: 
// Regalo    : Costo
// Tarjeta   : $10.00 o menos
// Chocolates: $11.00 a $100.00
// Flores    : $101.00 a $250.00
// Anillo    : Más de $251.00
// Se requiere un diagrama de flujo con el algoritmo que ayude a determinar qué regalo se le puede comprar a ese ser tan especial por el día del amor y la amistad.

// let presupuesto = +prompt("Ingrese el presupuesto en $")
let presupuesto = 251;
let regalo = "";
if (presupuesto <= 10) {
  regalo = "Tarjeta"
} else if (presupuesto <= 100) {
  regalo = "Chocolates"
} else if (presupuesto <= 250) {
  regalo = "Flores"
} else {
  regalo = "Anillo"
}
console.log(`El regalo será: ${regalo}`)

console.log(`---------Ejercicio 3.4-------------`)
// 3.4 El dueño de un estacionamiento requiere un diagrama de flujo con el algoritmo que le permita determinar cuánto debe cobrar por el uso del estacionamiento a sus clientes. Las tarifas que se tienen son las siguientes:
// Las dos primeras horas a $5.00 c/u.
// Las siguientes tres a $4.00 c/u.
// Las cinco siguientes a $3.00 c/u.
// Después de diez horas el costo por cada una es de dos pesos.

// let permanencia = +prompt("Ingrese las horas de permanencia")
let permanencia = 6; 
let cobro = 0;
if (permanencia <= 2) {
  cobro = permanencia * 5;
} else if (permanencia <= 5) {
  cobro = 10 + (permanencia-2) * 4;
} else if (permanencia <= 10) {
  cobro = 22 + (permanencia-5) * 3;
} else {
  cobro = 37 + (permanencia-10) * 2;
}
console.log(`El cobro será: $${cobro}`)

console.log(`---------Ejercicio 3.8-------------`)
// 3.8 Cierta empresa proporciona un bono mensual a sus trabajadores, el cual puede ser por su antigüedad o bien por el monto de su sueldo (el que sea mayor), de la siguiente forma: 
// Antigüedad : Bono
// > 2 y <= 5 :  20 %
// > 5        :  30 % 
// Sueldo             : Bono
// < $1000            : 25% 
// > $1000 y <= $3500 : 15% 
// > $3500            : 10%
// Realice el algoritmo correspondiente para calcular los dos tipos de bono, asignando el mayor, y represéntelo con un diagrama de flujo y pseudocódigo


// let anios = +prompt("Ingrese años de antigüedad")
// let Sueldo = +prompt("Ingrese Sueldo")
let anios = 3;
let Sueldo = 1100;
let bonoAnios = 0;
let bonoSueldo = 0;
if (anios <= 2) {
  bonoAnios = 0;
} else if (anios > 2 && anios <= 5) {
  bonoAnios = 20;
} else {
  bonoAnios = 30;
}

if (Sueldo < 1000) {
  bonoSueldo = 25;
} else if (Sueldo >= 1000 && Sueldo <=3500) {
  bonoSueldo = 15;
} else {
  bonoSueldo = 10;
}

if (bonoAnios > bonoSueldo) {
  console.log(`De acuerdo a su antigüedad le corresponde un bono de ${bonoAnios}%`)
} else {
  console.log(`De acuerdo a su sueldo le corresponde un bono de ${bonoSueldo}%`)
}


console.log(`---------Ejercicio 3.9-------------`)
// 3.9 Una compañía de seguros para autos ofrece dos tipos de póliza: cobertura amplia (A) y daños a terceros (B). Para el plan A, la cuota base es de $1,200, y para el B, de $950. A ambos planes se les carga 10% del costo si la persona que conduce tiene por hábito beber alcohol, 5% si utiliza lentes, 5% si padece alguna enfermedad –como deficiencia cardiaca o diabetes–, y si tiene más de 40 años, se le carga 20%, de lo contrario sólo 10%. Todos estos cargos se realizan sobre el costo base. Realice diagrama de flujo y diagrama N/S que represente el algoritmo para determinar cuánto le cuesta a una persona contratar una póliza.

let a = 0;
let b = 0;
let alcohol = +prompt("¿Bebe alcohol? Ingrese 1 (Si) ó 2 (No)");
let lentes = +prompt("¿Usa lentes? Ingrese 1 (Si) ó 2 (No)");
let enfermedad = +prompt("¿Sufre alguna enfermedad? Ingrese 1 (Si) ó 2 (No)");
let edad = +prompt("Ingrese edad en años");
let cargoAlc = 0;
let cargoLen = 0;
let cargoEnf = 0;
let cargoEda = 0;


if (alcohol === 1) {
  cargoAlc = 0.10;
}
if (lentes === 1) {
  cargoLen = 0.05;
}
if (enfermedad === 1) {
  cargoEnf = 0.05;
}
if (edad > 40) {
  cargoEda = 0.20;
} else {
  cargoEda = 0.10;
}
a = 1200 * (1+(cargoAlc + cargoLen + cargoEnf + cargoEda));
b = 950 * (1+(cargoAlc + cargoLen + cargoEnf + cargoEda));

console.log(`La póliza de cobertura amplica cotiza en $${a}`);
console.log(`La póliza de daños a terceros cotiza en $${b}`);

console.log(`---------Ejercicio 3.11-------------`)
// 3.11 Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo mediante el diagrama de flujo, el pseudocódigo y diagrama N/S que permita determinar el bono que recibirá un trabajador

// let antiguedad = +prompt("Ingrese los años de antigüedad");
let antiguedad = 0;
let bono = 0;
if (antiguedad >= 1 && antiguedad <= 5) {
  bono = antiguedad*100
} else if (antiguedad > 5) {
  bono = 1000;
}
console.log(`Le corresponde un bono de $${bono}`)