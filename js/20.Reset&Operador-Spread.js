//PARAMETROS REST

function suma(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}
console.log(suma(1, 2)); //3
console.log(suma(1, 2, 3)); //6
console.log(suma(1, 2, 3, 4)); //10
console.log(suma(1, 2, 3, 4, 5)); //15

//OPERADOR SPREAD

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 0];

array3 = [...array1, ...array2];

console.log(array1, array2); // [ 1, 2, 3, 4, 5 ] [ 6, 7, 8, 9, 0 ]
console.log(array3); //1 2 3 4 5 6 7 8 9 0
