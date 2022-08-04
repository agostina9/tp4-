// listarContactos(): Lista toda la agenda
    // buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
    // eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
    // agendaLlena(): indica si la agenda está llena.
    // huecosLibres(): indica cuántos contactos más podemos ingresar.
class Contacto{
    constructor(nombre, telefono)//el nombre es unico
    {
        this.nombre=nombre;
        this.telefono=telefono;
    }
    
    
}

class Agenda{
    constructor(tamanio=10){
    this.contactos=[];
    this.tamanio = tamanio;   
    }
    agregarContacto(contactoNuevo){
        //verificar si el contacto existe
        if(this.existeContacto(contactoNuevo.nombre)=== true){
            console.log('El contacto ya existe, no lo agrego')
        }else{
            //verificar si el metodo agenda llena retorna false
            if(!this.agendaLlena());{
                this.contactos.push(contactoNuevo);
            }
            
        }
        console.log(this.contactos);
    }

    existeContacto(nombre){
        const contactoExistente = this.contactos.find((itemContacto)=>{return nombre=== itemContacto.nombre});
        if(contactoExistente){
            document.write(`El contacto existe `);
            return true
        }else{
            document.write('El contacto no existe');
            return false;
        }
    }
    buscarContacto(nombre){
        const buscarContact = this.contactos.find((itemContacto)=>{return nombre=== itemContacto.nombre})
        if (buscarContact){
            document.write(`El contacto buscado es ${buscarContact.nombre} y su numero es ${buscarContact.telefono}`);
           
            return true
        }
    }

    agendaLlena(){
        if(this.contactos.length === this.tamanio ){
            document.write('La agenda esta llena')
            return true;
        }else{
            console.log('Hay espacio disponible')
            return false;
        }
    }
    set cambiarTamanio(nuevoTamanio){this.tamanio= nuevoTamanio};
    espacioDisponible(){
        let huecoslibres = parseInt(this.tamanio.length - this.contactos.length)
        console.log(huecoslibres)
        if (this.contactos.length !== this.tamanio){
            document.write(`La agenda tiene ${huecoslibres} espacio disponible`);
            return true
        }
    }
    eliminarContacto(nombre){
        let contactosFiltrados = this.contactos.filter((itemContacto)=>{return itemContacto.nombre != nombre});
        this.contactos = contactosFiltrados;
        console.log('Elemento eliminado'+ nombre);
        console.log(this.contactos);
    }
    listarContactos(){
        for (let i = 0; i < this.contactos.length; i++) {
            document.write (this.contactos[i]);  
    
        }
    }
}

//crear una agenda
let agendaTelefonica=new Agenda();
console.log(agendaTelefonica)

//menu de opciones
do{
    let opcion = parseInt(prompt(`Seleccione una opcion:
1-Agregar un contacto,
2-Consultar si el contacto existe,
3-Listar los contactos,
4-Buscar un contacto,
5-Eliminar un contacto,
6-Consultar si la agenda esta llena,
7-Consultar si la agenda tiene espacio disponible,
8-Cambiar el tamaño de la agenda`));

switch (opcion) {
    case 1:
        // 1-Agregar un contacto,
        let nombre=prompt('Ingresar un nombre').toLocaleLowerCase();
        let telefono= prompt('Ingresar un telefono');
        let contacto1= new Contacto(nombre,telefono);
        agendaTelefonica.agregarContacto(contacto1);
        break;

    case 2:
        // 2-Consultar si el contacto existe
        let nombreBuscado=prompt('Ingresar un nombre').toLocaleLowerCase();
        agendaTelefonica.existeContacto(nombreBuscado);
        break;
    case 3:
            // 3-Listar los contactos,
            agendaTelefonica.listarContactos();
        break;
    case 4:
            // 4-Buscar un contacto,
            let buscarNombre=prompt('Ingresar un contacto').toLocaleLowerCase();
        agendaTelefonica.buscarContacto(buscarNombre);
        break;
    case 5:
            // 5-Eliminar un contacto,
            let nombreAEliminar=prompt('Ingresar un nombre a eliminar').toLocaleLowerCase();
            agendaTelefonica.eliminarContacto(nombreAEliminar);
        break;
    case 6:
            // 6-Consultar si la agenda esta llena,
            agendaTelefonica.agendaLlena();
        break;
    case 7:
            // 7-Consultar si la agenda tiene espacio disponible,
               agendaTelefonica.espacioDisponible();
        break;
    case 8:
            // 8-Cambiar el tamaño de la agenda
            agendaTelefonica.cambiarTamanio= prompt('Ingrese un nuevo tamaño para la agenda');
            alert('El tamaño de la agenda es ' + agendaTelefonica.tamanio)
        break;
        default:
            alert('Ingreso una opcion incorrecta');

}

}while(confirm('¿Quiere realizar otra operacion?'));