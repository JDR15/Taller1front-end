// ACCEDER AL FORM

let form = document.getElementById("form")

let fe1 = document.querySelector(".campodoc .feedback")

// ESTABLECER REGLAS VALIDACION

const $number = /^[0-9]{1,15}/
const $textos = /^[A-Za-zñÑáÁ]{10,50}/

// VALIDACION ANTES DEL ENVIO FORM

form.doc.addEventListener('input',(e)=>{
    e.preventDefault()
    // console.log(e.target.value)
    if($number.test(e.target.value)){
        form.doc.classList.add("success")
        fe1.style.setProperty("visibility", "hidden")
        fe1.style.setProperty("opacity", "0")
    }
    else{
        form.doc.setAttribute("class","error")
        fe1.textContent = "Solo puede digitar valores numericos y la longitud debe ser minimo de 1"
        fe1.style.setProperty("visibility", "visible")
        fe1.style.setProperty("opacity", "1")
    }
    
})