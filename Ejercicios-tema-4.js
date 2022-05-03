let numeroIf = 4;

if(numeroIf > 0){

    console.log("El numero es positivo");
}else{

    console.log("El numero es Negativo");
}


let numeroWhile = 0;

while(numeroWhile < 3){

    console.log(numeroWhile);
    numeroWhile += 3;

}

do {
    console.log(numeroWhile);
    
} while (numeroWhile<3);

let numeroFor=0;

for (numeroFor;  numeroFor<=3; numeroFor++){
    console.log(numeroFor)
   
}

let estacion="otoño";

switch (estacion) {
    case "otoño":
        console.log("Estamos en otoño")
        break;
    case "invierno":
        console.log("Estamos en inviero")
        break;
    case "primavera":
        console.log("Estamos en primavera")
        break;
    case "verano":
        console.log("Estamos en verano")
        break;

    default:
        console.log("no estamos en ninguna estacion");
        break;
}

