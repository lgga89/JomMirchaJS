//DECLARACION DE FUNCION

function devuelveValor() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
  return 19;
}

let valor = devuelveValor();
//INVOCACION DE FUNCION
console.log(valor);

//-------------------------------------------

function saludo(nombre, edad) {
  console.log(`mi nombre es ${nombre} y tengo ${edad} años`);
}
saludo("luis", 31);

//-------------------------------------------
//FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS
funcionDeclarada();
//FUNCION DECLARADA
function funcionDeclarada() {
  console.log(
    "esta es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo incluso antes de que la funcion sea declarada"
  );
}
funcionDeclarada();

//FUNCION EXPRESADA ANONIMA
const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada, es decir, una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dira"
  );
};

funcionExpresada();
