let listaCompra = ["arroz", "harina", "quesa", "carne", "huevos"];
listaCompra.push("Aceite de Girasol")
listaCompra.pop()
console.log(listaCompra)



// Lista de peliculas

let peliculasFavoritas =[

    {
        titulo: "harry potter and the goblet of fire",
        director: "David Yates",
        fecha: 2005
    },

    {
        titulo: "harry potter and the deathly hallows part 1",
        director: "David Yates",
        fecha: 2010
    },

    {
        titulo: "harry potter and the deathly hallows part 2",
        director: "richard harrys",
        fecha: 2011
    },
]

let listaDespues2010= peliculasFavoritas.filter((e)=> e.fecha > 2010),
    listaDirectores = peliculasFavoritas.map((e)=> e.director),
    listaTitulosPeliculas = peliculasFavoritas.map((e)=> e.titulo),
    listaDirTitu = listaDirectores.concat(listaTitulosPeliculas),
    listaDirTituSpreadOperator =[...listaDirectores, ...listaTitulosPeliculas];
console.log(listaDespues2010, listaDirectores, listaTitulosPeliculas, listaDirTituSpreadOperator);

