const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

parrafos.forEach((parrafo)=>{

    parrafo.addEventListener("dragstart", ()=>{

        console.log("inicia el arrastre");
        // console.log(parrafo.target.textContent);
        parrafo.classList.add("dragging");
    })
    parrafo.addEventListener("dragend", ()=>{

        console.log("inicia el final");
        // console.log(parrafo.target.textContent);
        parrafo.classList.remove("dragging");
    })
});

secciones.forEach((seccion)=>{

    seccion.addEventListener("dragover", (e)=>{
        e.preventDefault()

        console.log("esperanza")
    })

    seccion.addEventListener("drop", (e)=>{

        console.log("esperanza");
        const id_parrafo = e.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
    })

    
})

