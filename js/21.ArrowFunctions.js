/*FUNCIONES EXPRESADAS: cuando le asignas a una variable el valor de una funcion*/
const saludo = function () {
  console.log(`HOLA 01`);
};
saludo();

//FUNCIONES DECLARADAS
function saludar() {
  console.log(`HOLA 02`);
}
saludar();
//--------------------------------------------------------------------
//FUNCIONES DE FLECHA / ARROW

const hola = (nombre) => console.log(`HOLA ${nombre} 03`);

hola("luis");

//antes

const sumar = function (a, b) {
  return a + b;
};
console.log(`la suma es ${sumar(2, 2)}`);

// despues
const sum = (a, b) => a + b;
console.log(`la suma es ${sum(5, 5)}`);

const funcionDeVariasLineas = () => {
  console.log("uno");
  console.log("dos");
  console.log("tres");
};
funcionDeVariasLineas();

//con metodos

const numeros = [1, 2, 3, 4, 5]; // iterar cada uno de los numeros

numeros.forEach(function (el, index) {
  console.log(`elemento ${el} esta en la posicion ${index}`);
});
console.log("-------ARROW---------------------");
numeros.forEach((el, index) =>
  console.log(`${el} esta en la posicion ${index}`)
);

const perro = {
  nombre: "gugu",
  ladrar: function () {
    console.log(this);
  },
  perrito() {
    console.log(this);
  },
};

console.log(perro);
perro.ladrar();
perro.perrito();
