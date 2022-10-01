let nombre = "louis";
apellido = "Garcia";
edad = 35;

console.log(nombre);
console.log(apellido);
console.log(edad);

console.log(nombre, apellido, edad);
console.log(`mi nombres es ${nombre} ${apellido} y tengo ${edad} años`);
console.log(`mi nombres es %s %s y tengo %d años`, nombre, apellido, edad);
console.log(document);
console.log(window);
console.table(Object.entries(console).sort());

const numeros = [1, 2, 3, 4, 5];
console.table(numeros);

const valores = ["uno", "dos", "tres", "cuatro", "cinco"];
console.table(valores);

const perro = {
  nombre: "boni",
  raza: "boxer",
  color: "cafe",
};
console.table(perro);

console.time("cuanto tiempo tarda mi codigo");
const arreglo = Array(100000);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
console.timeEnd("cuanto tiempo tarda mi codigo");
