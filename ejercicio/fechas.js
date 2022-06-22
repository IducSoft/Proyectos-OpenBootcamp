const fecha = new Date(),
    anioActual = fecha.getFullYear(),
    diaActyual = fecha.getDate(),
    mesActual = fecha.getMonth() + 1;

    const miCumple = new Date('sep 29 1995'),
        hoyMasTarde = fecha > miCumple,
        diaNacimiento = miCumple.getDate(),
        mesNacimiento = miCumple.getMonth() + 1,
        anioNacimiento = miCumple.getFullYear();
console.log(miCumple, diaNacimiento, mesNacimiento, anioNacimiento)