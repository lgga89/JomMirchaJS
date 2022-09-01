try {
  console.log("TRY se agrega el condigo a evaluar");

  noExiste; //ERRRO DE SINTAXIS
  console.log("segundo mensaje");
} catch (error) {
  console.log("CATCH captura cualquier error surgido o lanzado en el TRY");
  console.log(error);
} finally {
  console.log("FINALLY se ejecutara al final de un bloque TRY-CATCH");
}
console.log("------------------------------------------------------");
//YO ESPERABA NUMEROS NO LETRAS

try {
  let numero = 10;
  //isNaN es una funcion le pasas un numero
  //letra = verdadero
  //numero = falso
  if (isNaN(numero)) {
    // si es caracter aqui debe salir mi error
    throw new Error("El caracter introducido no es un Número");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error ${error}`);
}
