
function geoPosition(){

    if(navigator.geolocation){

        const geoloc = navigator.geolocation;
        const watchPos = geoloc.watchPosition(position=>{

            console.log(position.coords);
        }, (error)=>{

            console.error(error);
        }, {timeout:60000})
    }else{

        alert("Su navegador no tiene la capacidad de acceder a su geolocalizacion");
    }
}
