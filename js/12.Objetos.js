let a = new String("hola");
console.log(a);

const b = {};
console.log(b);

let c = new Object();
console.log(c);

/* dentro de un objeto a las variables se le van a llamar
atributos /propiedades  ya a las funciones se les
llama metodos */

const persona = {
  nombre: "luis",
  apellido: "garcia",
  edad: 31,
  altura: 1.7,
  pasaTiempos: ["cantar", "jugar"],
  soltero: true,
  contacto: {
    email: "lg_20_GA@hotmail.com",
    facebook: "facebook.com/lgga",
    movil: 982287573,
  },
  saludar: function hi5() {
    console.log("hola funcion");
  },

  decirMiNombre: function () {
    console.log(
      `HOLA ME LLAMO ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir ${this.contacto.facebook} `
    );
  },
};
console.log(persona["edad"]); // tambien se puede con corchetes
console.log(persona.edad); // preferible objetos con puntos
console.log(persona.pasaTiempos[1]);
console.log(persona.contacto.email);
persona.saludar();
persona.decirMiNombre();

console.log(Object.keys(persona)); // metodo prototipo OBjet me lista toda las proiedades del objeto se forma un arreglo
console.log(Object.values(persona)); // metodo protipo Objet me lista los valores de las propeidades
console.log(persona.hasOwnProperty("nombre")); // esta propiedad me indica si existe una propiedad con ese nombre
console.log(persona.hasOwnProperty("nacimiento"));
