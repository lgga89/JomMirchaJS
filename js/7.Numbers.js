let a = 2; // numeros
let b = new Number(1); // constructor
let c = 7.19;
let d = "5.6";

//ALGUNOS METODOS NUMERICOS
console.log(c.toFixed(1)); // me muetras cuantos decimales mostrar
console.log(typeof c, typeof d); // me señala que tipo de datos son
console.log(c + d); // concatena un numero y string
console.log(c + parseInt(d)); //convierte el string a number
console.log(c + parseFloat(d));

console.log(c + Number.parseInt(d)); //convierte el string a number
console.log(c + Number.parseFloat(d));
