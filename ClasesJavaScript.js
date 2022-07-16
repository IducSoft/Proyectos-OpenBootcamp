class Estudiante {

    constructor(nombre){

        this.nombre = nombre;
        this.lista = ["HTML", "CSS", "JAVASCript"];
    }


    get obtenDatos(){

        return {

            nombre: this.nombre,
            asignaturas: this.lista
        }
    }
}


let student = new Estudiante("isaac");


console.log(student.obtenDatos)