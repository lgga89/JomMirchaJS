//PARAMETROS REST

function suma(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}
console.log(suma(1, 2));
console.log(suma(1, 2, 3));
console.log(suma(1, 2, 3, 4));
console.log(suma(1, 2, 3, 4, 5));

//OPERADOR SPREAD

array1 = [1, 2, 3, 4, 5];
array2 = [6, 7, 8, 9, 0];

array3 = array1 + array2;

console.log(array1, array2);
console.log(...array1, ...array2);
