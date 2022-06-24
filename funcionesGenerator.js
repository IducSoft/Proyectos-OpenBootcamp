
function sinParametros(){

    return true;
}

sinParametros();

async function fiveSecond(){

    setTimeout(()=>{
        console.log("Hola soy una promesa 5 segundos después de haberse ejecutado")
    }, 5000)
}

fiveSecond();


function* indexParAutomatico(){


    let id=0;

    while(true){

        id++;

        if(id % 2 == 0){

            yield id;
        }

        if(id < 10){

            return
        }
    }
}

indexParAutomatico();