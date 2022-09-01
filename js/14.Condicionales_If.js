/*
Logicos
! - Not: niega, es decir lo que es verdadero lo vuelve falso y viceversa.

|| - Or: Ccuando tengo 2 o mas condiciones, con que una se cumpla, es decir sea verdadera, el OR sera verdadero.

&& - And: cuando tengo 2 o mas condiciones, todas tienen que cumplirse, es decir ser verdaderas, para que AND se valide
*/
/* if - else*/

let edad = 17;
//---- MAYOR QUE
if (edad >= 18) {
  console.log(`eres mayor de edad`);
} else {
  console.log("no eres menor de edad");
}
//---- MENOR QUE

if (edad < 18) {
  console.log("eres menor de edad");
} else {
  console.log("eres mayor de edad");
}

//EJERCICIO
//IF ANINADOS
// if-else if-else

/*
dejame dormir 0 hrs - 5 hrs
buenos dias   6 hrs - 11hrs
buenas tardes 12hrs - 18hrs
buenas noches 19hrs - 23hrs 
*/

let hora = 1;
if (hora >= 6 && hora <= 11) {
  console.log("buenos dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("buenas tardes");
} else if (hora >= 19 && hora <= 23) {
  console.log("buenas noches");
} else if (hora >= 0 && hora < 5) {
  console.log("DEJAME DORMIR");
}

//OPERADOR TERNARIO

// MODO COMUN
let e = 18;
if (e >= 18) {
  console.log(`eres mayor de edad`);
} else {
  console.log("no eres menor de edad");
}
// MODO TERNARIOS
let ternarios = e >= 18 ? "ERES MAYOR DE EDAD" : "ERES MENOR DE EDAD";
console.log(ternarios);
