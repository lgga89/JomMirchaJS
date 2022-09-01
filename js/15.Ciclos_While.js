/*Ciclo FOR Lo utilizamos cuando conocemos el número de repeticiones.
Ciclo While Lo utilizamos cuando desconocemos el numero de repeticiones. */
console.log("EJEMPLOS FOR 01");
console.log("---------------------------");
let i = 0;

for (i = 0; i <= 10; i++) {
  console.log(`FOR ${i}`);
}
//------------------------------------------------------
console.log("EJEMPLOS FOR 02");
console.log("---------------------------");
let dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

for (z = 0; z <= dias.length - 1; z++) {
  console.log(`FOR2 ${dias[z]}`);
}

//--------------------------------------------------------
console.log("EJEMPLOS FOR 03");
console.log("---------------------------");
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (q = 0; q < numeros.length; q++) {
  console.log(`${numeros[q]}`);
}
//-----------------------------------------------------------

const luis = {
  nombre: "Louis",
  apellido: "Garcia",
  edad: 31,
};
// FOR IN
console.log("FOR IN ");
console.log("---------------------------");
for (const propiedades in luis) {
  //console.log(propiedades); // me manda el nombre de las propiedades de mi objeto
  console.log(`keys:${propiedades}, value:${luis[propiedades]}`); // ingresamos a la propiedad y al valor del objeto
}
//FOR OF
console.log("FOR OF");
console.log("---------------------------");
let num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (const elemento of num) {
  console.log(`${elemento}`);
}
console.log("FOR OF 02");
console.log("---------------------------");
const saludo = "HOLA MUNDO";

for (const caracter of saludo) {
  console.log(caracter);
}

//-------------------------------------------------------------------
console.log("EJEMPLOS WHILE 01");
console.log("---------------------------");
let contador = 0;
while (contador <= 10) {
  console.log(`while 01 ${contador}`);
  contador++;
}
console.log("EJEMPLOS WHILE 02");
console.log("---------------------------");
let conta = 0;
do {
  console.log(`while 02 ${conta}`);
  conta++;
} while (conta <= 10);
