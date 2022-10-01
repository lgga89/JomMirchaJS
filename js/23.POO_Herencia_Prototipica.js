function Animal(nombre, genero) {
  //atributos DE ANIMAL
  this.nombre = nombre;
  this.genero = genero;
}

//metodos DE ANIMAL
Animal.prototype.sonar = function () {
  console.log(`Hago sonidos por que estoy vivo`);
};
Animal.prototype.saludar = function () {
  console.log(`hola me llamo ${this.nombre}`);
};
//-------------------------------------------------------------

//--------------------------------------------------------------------------------------------
//instancia FUNCION CONSTRUCTORA ANIMAL
const snoppy = new Animal("Snoppy", "Macho");
lola = new Animal("lolita", "hembra");

console.log(snoppy);
console.log(lola);
snoppy.saludar();

//---------------------------------------------------------
//Herencia prototipica
function Perro(nombre, genero, tamanio) {
  this.super = Animal; // invocas a la funcion constructora padre ANIMAL
  this.super(nombre, genero); //recibo esos parametros de la funcion constructora padre
  this.tamanio = tamanio;
}
//PERRO ESTA HEREDANDO DE ANIMAL
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//sobreEscritura de metodos de prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log(`soy un perro y mi sonido es un ladrido`);
};

Perro.prototype.ladrar = function () {
  console.log("GUAUUUU GUAUUUU!!!!!");
};

//instancia de la funcion PERRO que hereda de ANImal

const thiago = new Perro("Thiago", "machito", "pequeño");
console.log(thiago);
thiago.sonar();
thiago.ladrar();
