//aplicado a objetos y arreglos
//asignar valores nueva forma

//------------------ARREGLOS------------------
const numeros = [1, 2, 3];
//guardar cada uno de los elementos en variables diferentes

//SIN  DESTRUCTURACION ARREGLOS
let uno = numeros[0],
  dos = numeros[1],
  tres = numeros[2];
console.log(uno, dos, tres);

//CON DESTRUCTURACION ARREGLOS LAS VARIABLES  PUEDEN SER DIFERENTE
const [one, two, three] = numeros;
console.log(one, two, three);

//--------------------OBJETOS---------------------------
//para que la destructuracion funcione en los objetos
//la propiedad del objeto debe tener el mismo nombre
// en donde se va almacenar la variable

const persona = {
  nombre: "luis",
  apellido: "garcia",
  edad: 31,
};
/*sin destructuracion objetos */
nom = persona.nombre;
ape = persona.apellido;
ed = persona.edad;
console.log(nom, ape, ed);

/*con destructuracion objetos */
let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad);
