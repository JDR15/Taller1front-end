let btn = document.getElementById("abrir")

let ventana = document.getElementById("ventana")

let close = document.getElementById("cerrarModal")

//Mostrar Ventana Modal 

btn.addEventListener("click",()=>{
    ventana.style.display = "block"
})

window.addEventListener("click",function(event) {
    if (event.target == ventana) {
      ventana.style.display = "none";
    }
  })


