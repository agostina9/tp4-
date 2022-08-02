class Producto{
    constructor(codigo, nombre, precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
    }
    imprimirDatos(){
        document.write(`<ul>
        <li> Codigo:${this.codigo} </li>
        <li> Nombre:${this.nombre} </li>
        <li> Precio:${this.precio} </li>
        </ul>`)
    }
    get mostrarCodigo(){ return this.codigo};
    get mostrarNombre(){ return this.nombre};
    get mostrarPrecio(){ return this.precio};
    set cambiarCodigo(nuevoCodigo){this.codigo= nuevoCodigo};
    set cambiarNombre(nuevoNombre){this.codigo= nuevoNombre};
    set cambiarPrecio(nuevoPrecio){this.codigo= nuevoPrecio};
}

let celular = new Producto('123','Nokia','$8000');
let celular2 = new Producto('124','Samsung','$85000');
let celular3 = new Producto('1266','Iphone','$90000');

let productos=[];
productos.push(celular);
productos.push(celular2);
productos.push(celular3);
console.log(productos);

celular.imprimirDatos();
celular2.imprimirDatos();
celular3.imprimirDatos();
