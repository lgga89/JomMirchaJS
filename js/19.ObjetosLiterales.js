let nombre = "tiago",
  edad = 7;

let perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("guau guau");
  },
};
console.log(perro);
perro.ladrar();

//---------simplificamos-------------------------

let dog = {
  nombre,
  edad,
  raza: "Callejero",
  ladrar() {
    console.log("guau guau GUAUUUU");
  },
};
console.log(dog);
dog.ladrar();
