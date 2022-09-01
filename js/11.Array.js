const a = [];
console.log(a);

const b = ["luis", "jose", "carlos"];
console.log(b[2]);

const c = [1, true, "hola", ["A", "B", "C", [1, 2, 3]]];
console.log(c[2].length);
console.log(c[3][3][0]);

const d = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(d[2]);

const colores = ["rojo", "verde", "azul"];
console.log(colores);

colores.push("amarillo"); // agrega
console.log(colores);
colores.pop(); //quita
console.log(colores);

colores.forEach(function (el, index) {
  console.log(`<li id="${index}"> ${el} </li>`);
});
