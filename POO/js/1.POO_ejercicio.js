/*const Pelicula = {
  nombre: "Harry Potter",
  id: 1,
  genero() {
    return ` ${this.nombre}`;
  },
};

console.log(Pelicula);
//abstraciionn
//POO
//platilla
class Movie {
  constructor({ nombre, id }) {
    this.nombre = nombre;
    this.id = id;
  }
  genero() {
    return ` ${this.nombre}`;
  }
}

//instanciar
//clave valor kivalio
const Harry = new Movie({ nombre: "Harry II", id: 2 });
const Arana = new Movie({ id: 3, nombre: "Araña" });

console.log(Harry);
console.log(Arana);

//-------------------HERENCIA-----------------------------------//

class Series extends Movie {
  constructor(props) {
    super(props);
    // this.capitulo = capitulo;
    console.log(props);
  }
}
const Cobra = new Series({ nombre: "cobra", id: 4 });

console.log(Cobra);
*/

const PeliculaUno = {
  nombre: "Harry Potter",
  id: 1,
  estreno() {
    return `estreno de ${this.nombre}`;
  },
};

console.log(PeliculaUno);
console.log(PeliculaUno.estreno());

//POO
//ENCAPSULAMIENTO
class PeliculaDos {
  constructor({ nombre, id }) {
    this.nombre = nombre;
    this.id = id;
  }
  estreno() {
    return `el estreno de ${this.nombre}`;
  }
}

//const Harry = new PeliculaDos("HARRY POTTER", 2);
const Harry = new PeliculaDos({ id: 2, nombre: "HARRY POTTER" });
console.log(Harry);
console.log(Harry.estreno());

//-----------------HERENCIA--------------------------

class Serie extends PeliculaDos {
  constructor({ nombre, id, cap }) {
    super({ nombre, id });
    this.cap = cap;
  }
  reproducirCapitulo() {
    return `el estreno de... ${this.nombre} tiene ${this.cap} capitulos y es ID ${this.id}`;
  }
}

const SerieUno = new Serie({ nombre: "Dexter", id: 3, cap: 150 });
console.log(SerieUno.reproducirCapitulo());
