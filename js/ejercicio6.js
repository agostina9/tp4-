class Libro {
  constructor(ISBN, titulo, autor, numPaginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }
  get mostrarIsbn() {
    return this.ISBN;
  }
  set cambiarIsbn(nuevoISBN) {
    this.ISBN = nuevoISBN;
  }
  get mostrarTitulo() {
    return this.titulo;
  }
  set cambiarTitulo(nuevoTitulo) {
    this.titulo = nuevoTitulo;
  }
  get mostrarAutor() {
    return this.autor;
  }
  set cambiarAutor(nuevoAutor) {
    this.autor = nuevoAutor;
  }
  get mostrarNumPaginas() {
    return this.numPaginas;
  }
  set cambiarNumPaginas(nuevoNPaginas) {
    this.numPaginas = nuevoNPaginas;
  }

  mostrarLibro() {
    document.write(
      `<p>El libro ${this.mostrarTitulo} con ISBN ${this.mostrarIsbn} creado por el autor ${this.mostrarAutor} tiene páginas ${this.mostrarNumPaginas}</p>`
    );
  }
}

let divergente= new Libro('9789878120065', 'Divergente', 'Roth Veronica', '464');
let frankestein= new Libro('9789500394734', 'Frankestein', 'SHELLEY MARY W', '224' );

divergente.mostrarLibro();
frankestein.mostrarLibro();

if (frankestein.mostrarNumPaginas > divergente.mostrarNumPaginas){
    document.write('El numero de paginas de Frankestein es mayor al de Divergente');
}else {
    document.write('El numero de paginas de Divergente es mayor que el de Frankestein');
}

