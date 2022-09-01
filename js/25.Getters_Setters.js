//POO
console.log("--------------------CLASES--------------");
class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  sonido() {
    return `Hago sonidos por que estoy vivo ${this.nombre}`;
  }
  saludar() {
    return `Hola me llamo ${this.nombre}`;
  }
}
const Perro = new Animal("Thiago", "Macho");
console.log(Perro.nombre);
console.log(Perro.sonido());
console.log(Perro.saludar());
console.log(Perro);
console.log("--------------------HERENCIA--------------");

class Perrito extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }
  sonido() {
    return `vivo ${this.nombre}`;
  }
  ladrar() {
    return `gua gua gua ${this.nombre}`;
  }
  static queEres() {
    console.log(`soy un perrito mamifero`);
  }

  /*LOS SETTERS Y GETTERS son metodos especiales que nos permiten
  establecer y obtener los valores de atributos de nuestra clase*/
  get getRaza() {
    // obtener
    return this.raza;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
}

const dog = new Perrito("pelusa", "hembra", "pequeña");
console.log(dog.nombre);
console.log(dog.genero);
console.log(dog.sonido());
console.log(dog);

// un metodo estatico no necesita de instanciarse
Perrito.queEres();

//get y set con el valor de intansiamiento
dog.setRaza = "ERES UNA RAZA PEQUINEZ";
console.log(dog.getRaza);
