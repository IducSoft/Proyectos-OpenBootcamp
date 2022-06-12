
class Persona{

    constructor(edad, nombre, telefono){

        this.edad=edad;
        this.nombre=nombre;
        this.telefono=telefono;
    }
    // Metodos setter

    set editEdad(edad){

        this.edad=edad;
    }

    set editNombre(nombre){

        this.nombre=nombre;
    }

    set editTelefono(telefono){

        this.telefono=telefono;
    }

    // Metodos getter

    get mostrarEdad(){

        return this.edad;
    }

    get mostrarNombre(){

        return this.nombre;
    }

    get mostrarTelefono(){

        return this.telefono;
    }
}


// Creando el objeto persona

let humano = new Persona();

humano.editEdad=26;
humano.editNombre="Isaac Urdaneta";
humano.editTelefono="+58 416 1652340";
console.log(`mi nombre es: ${humano.mostrarNombre}, tengo ${humano.mostrarEdad} y mi numero es ${humano.mostrarTelefono}`)