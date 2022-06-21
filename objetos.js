class persona{

    constructor(nombre, apellido, edad, altura, eresDesarrollador){

        this.nombre=nombre;
         this.apellido=apellido;
          this.edad=edad;
        this.altura=altura;
        this.eresDesarrollador=eresDesarrollador
    }
}

let isaac = new persona("isaac", "urdaneta", 27, "1.79", true)
let david = new persona("david", "rojas", 25, "1.79", false)
let marco = new persona("marco", "laya", 26, "1.56", false)
let miEdad = isaac.edad;
let listaObjetos = [];
listaObjetos.push(isaac)
listaObjetos.push(david)
listaObjetos.push(marco)
let listaMenorMayor = listaObjetos.sort((b,a)=> b.edad - a.edad);

console.log(listaMenorMayor)