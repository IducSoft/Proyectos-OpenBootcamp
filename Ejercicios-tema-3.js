function sumar(art1, art2, art3){

    return art1 + art2 + art3;
}


console.log(sumar(1, 2, 4));



class Coche{

    constructor(numPuerta){

        this.numPuerta=numPuerta;
    }


    incremetarPuerta(num){

        this.numPuerta + num;
    }
}

let miCoche = new Coche(45);

miCoche.incremetarPuerta(1);

console.log(miCoche.numPuerta);