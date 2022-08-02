class Rectangulos{
    constructor(alto,ancho){
        this.alto=alto
        this.ancho=ancho
    }
    calcularPerimetro(){
        return 2*(this.alto + this.ancho);
    }
    calcularArea(){
        return this.alto * this.ancho;
    }
    //getters y setters
    get mostrarAlto(){return this.alto };
    set modificarAlto(nuevoAlto){this.alto=nuevoAlto};
    get mostrarAncho(){return this.ancho };
    set modificarAlto(nuevoAncho){this.ancho= nuevoAncho};


}

let rectangulo = new Rectangulos(20,10);

document.write(`<p>El rectangulo tiene un alto de ${rectangulo.mostrarAlto}</p>`);
document.write(`<p>El rectangulo tiene un ancho de ${rectangulo.mostrarAncho}</p>`);
document.write('El perimetro es igual a ='+ rectangulo.calcularPerimetro());
document.write('<br>El area es igual a ='+rectangulo.calcularArea());