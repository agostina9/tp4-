class Persona {
    constructor(nombre, edad, DNI,sexo, peso, altura, añoNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.dni=DNI;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.añoNacimiento=añoNacimiento;
    }
    mostrarGeneracion(){
if (this.añoNacimiento>= 1994 && this.añoNacimiento<=2010 ){
    document.write('Pertenece a la generacion Z')
}else if (this.añoNacimiento>= 1981 && this.añoNacimiento<=1993 ){
    document.write('Pertenece a la generacion Y (millennials)')
    } else if (this.añoNacimiento>= 1969 && this.añoNacimiento<=1980 ){
        document.write('Pertenece a la generacion X')
    } else if (this.añoNacimiento>= 1949 && this.añoNacimiento<=1968 ){
        document.write('Pertenece a la generacion Baby Boom')
    }else if (this.añoNacimiento>= 1930 && this.añoNacimiento<=1948 ){
        document.write('Pertenece a la generacion Z')}}
    esMayorDeEdad(){
        if (this.edad >= 18){
            document.write(`${this.nombre} es mayor de edad <br>`)
        }
    }
    mostrarDatos(){
        document.write(`<ul>
        <li> Nombre:${this.nombre} </li>
        <li> Edad:${this.edad} </li>
        <li> Sexo:${this.sexo} </li>
        <li> Peso:${this.peso} </li>
        <li> Altura:${this.altura} </li>
        <li> Año de Nacimiento:${this.añoNacimiento} </li>
        </ul>`)
    }
    generaDNI(){
        for (var i=0; i<8; i++) {
            var aleatorio = Math.floor(Math.random()*9);
            document.write(  aleatorio += 1);
          }
    }
    //getters y setters
    get mostrarNombre(){return this.nombre};
    set cambiarNombre(nuevoNombre){this.nombre=nuevoNombre};
    get mostrarEdad(){return this.edad};
    set cambiarNombre(nuevaEdad){this.edad=nuevaEdad};
    get mostrarDNI(){return this.dni};
    set cambiarNombre(nuevoDni){this.dni=nuevoDni};
    get mostrarSexo(){return this.sexo};
    set cambiarNombre(nuevoSexo){this.sexo=nuevoSexo};
    get mostrarPeso(){return this.peso};
    set cambiarNombre(nuevoPeso){this.peso=nuevoPeso};
    get mostrarAltura(){return this.altura};
    set cambiarNombre(nuevaAltura){this.altura=nuevaAltura};
    get mostrarAño(){return this.añoNacimiento};
   
}
Agostina= new Persona('Agos','23','41446484','Mujer','50kg','1.60','1998')
Agostina.generaDNI();
Agostina.mostrarDatos();
Agostina.esMayorDeEdad();
Agostina.mostrarGeneracion();