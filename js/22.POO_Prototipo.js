//POO

/* 
CLASES: modelo a seguir.
OBJETOS:es una instancia de una clase(una copia de ese modelo(clases)).
    
    -Atributos:Es una caracteristica o propiedad del Objeto
    (son variables dentro de un objeto ).

    -Métodos: son las accciones que un objeto puede realizar
    (son funciones dentro de un objeto).
*/

/*
PROTOTIPO:
mecanismo por el cual un objeto puede heredar de un
objeto padre, atributos y metodos(funciones).
*/

//objeto literal
console.log("OBJETO LITERAL");
console.log("===============");

const animal = {
  nombre: "Snoopy",
  sonar() {
    return `hago sonido por que estoy vivo ${this.nombre}`;
  },
};
console.log(animal);

const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    return `hago sonido por que estoy vivo ${this.nombre}`;
  },
};
console.log(animal2);
console.log(
  "--------------------------------------------------------------------------"
);
//FUNCION CONSTRUCTORA 01
console.log("FUNCION CONSTRUCTORA 01");
console.log("===============");

function Animal(nombre, genero) {
  //atributos de F.C
  this.nombre = nombre;
  this.genero = genero;

  //Metodo  // preferible que los metodos no esten dentro del constructor o funcion
  this.sonar = function () {
    return console.log(`hago sonido por que estoy vivo  ${this.nombre}`);
  };
  this.saludar = function () {
    return console.log(`Hola me llamo ${this.nombre}`);
  };
}
//instancia
const snoopy = new Animal("Snoopy", "Macho");
const lola = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
snoopy.sonar();
snoopy.saludar();

console.log(lola);
lola.sonar();
lola.saludar();
//------------------------------------------------------------------------------------------------------

//FUNCION CONSTRUCTORA 02
// funcion constructora donde asignamos LOS METODOS AL PROTOTIPO,
//no a la funcion como tal
console.log("FUNCION CONSTRUCTORA 02");
console.log("===============");
function Animal2(nombre, genero) {
  //atributos de F.C
  this.nombre = nombre;
  this.genero = genero;
}

//Metodo agregados al prototipo de la funcion constructora
Animal2.prototype.sonar = function () {
  console.log("hago sonido por que estoy vivo");
};
Animal2.prototype.saludar = function () {
  return console.log(`Hola me llamo ${this.nombre}`);
};
//instancia
const snoopy2 = new Animal2("Snoopy", "Macho");
const lola2 = new Animal2("Lola Bunny", "Hembra");

console.log(snoopy2);
console.log(lola2);
