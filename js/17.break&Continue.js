let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("-------BREAK-------");

for (let i = 0; i < numero.length; i++) {
  // cuando valga 5
  if (i === 5) {
    break; // te sales
  }
  console.log(numero[i]);
}
console.log("-------CONTINUE-------");
for (let i = 0; i < numero.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(numero[i]);
}
