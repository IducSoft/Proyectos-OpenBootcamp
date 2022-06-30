const miFuncion=(value)=>{

    try {
        if(typeof value === "number"){

            return value * 2;
        }else{

            throw "El daro proporcionado no es valido porque no es un numero"
        }
    } catch (message) {
        

        console.error(message)
    }
}

console.log(miFuncion("hola"))