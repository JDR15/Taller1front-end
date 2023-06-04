

let form = document.getElementById("form")

let fe1 = document.querySelector(".campodoc .feedback")
let fe2 = document.querySelector(".camponom .feedback")
let fe3 = document.querySelector(".campoape .feedback")
let fe4 = document.querySelector(".campocor .feedback")
let fe5 = document.querySelector(".campopas .feedback")
let fe6 = document.querySelector(".campocon .feedback")
let fe7 = document.querySelector(".campofecha .feedback")
let fe8 = document.querySelector(".campocheck .feedback")


const $doc = /^[0-9]{1,15}/
const $nom = /^[A-Za-zñÑáÁ]{1,}/
const $ape = /^[A-Za-zñÑáÁ]{1,}/
const $cor = /^[a-zA-Z0-9._%+-]+@\.co/
const $pas = /^[(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,}/
const con =  document.getElementById('con').value;
const pas2 =  document.getElementById('pas').value;
const check =  document.getElementById('check').value;


form.doc.addEventListener('input',(e)=>{
    e.preventDefault()
    // console.log(e.target.value)
    if($doc.test(e.target.value)){
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

form.nom.addEventListener('input',(e)=>{
    e.preventDefault()
    // console.log(e.target.value)
    if($nom.test(e.target.value)){
      
        fe2.style.setProperty("visibility", "hidden")
        fe2.style.setProperty("opacity", "0")
    }
    else{
       
        fe2.textContent = "Solo puede digitar caracteres alfanumericos"
        fe2.style.setProperty("visibility", "visible")
        fe2.style.setProperty("opacity", "1")
    }  
})

form.ape.addEventListener('input',(e)=>{
    e.preventDefault()
    // console.log(e.target.value)
    if($ape.test(e.target.value)){
        
        fe3.style.setProperty("visibility", "hidden")
        fe3.style.setProperty("opacity", "0")
    }
    else{
        
        fe3.textContent = "Solo puede digitar caracteres alfanumericos"
        fe3.style.setProperty("visibility", "visible")
        fe3.style.setProperty("opacity", "1")
    }  
})

form.fecha.addEventListener('input',(e)=>{
    e.preventDefault()
    // console.log(e.target.value)
    const currentDate = new Date();
    const birthDate = new Date(fechaNacimiento);
    const minDate = new Date('2002-01-01');

    if (birthDate > currentDate || birthDate < minDate) {
    
    return;
    }
    else{
        f7.textContent = "'La fecha de nacimiento debe ser válida y corresponder a una persona mayor de 18 años."
        f7.style.setProperty("visibility", "visible")
        f7.style.setProperty("opacity", "1")
    }  
})


form.cor.addEventListener('input',(e)=>{
    e.preventDefault()
    // console.log(e.target.value)
    if($cor.test(e.target.value)){
        
        fe4.style.setProperty("visibility", "hidden")
        fe4.style.setProperty("opacity", "0")
    }
    else{
        
        fe4.textContent = "El campo Correo electrónico debe contener caracteres propios de un correo '"
        fe4.style.setProperty("visibility", "visible")
        fe4.style.setProperty("opacity", "1")
    }  
})

form.pas.addEventListener('input',(e)=>{
    e.preventDefault()
    // console.log(e.target.value)
    if($pas.test(e.target.value)){
        
        fe5.style.setProperty("visibility", "hidden")
        fe5.style.setProperty("opacity", "0")
    }
    else{
        
        fe5.textContent = "El campo Password debe contener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y tener una longitud mínima de 10 caracteres."
        fe5.style.setProperty("visibility", "visible")
        fe5.style.setProperty("opacity", "1")
    }  
})

form.con.addEventListener('input',(e)=>{
    e.preventDefault()
    // console.log(e.target.value)
    if ( pas2 !== con) {
     
        fe7.style.setProperty("visibility", "hidden")
        fe7.style.setProperty("opacity", "0")
    }
    else{
        
        fe7.textContent = "El password y su confirmación no coinciden."
        fe7.style.setProperty("visibility", "visible")
        fe7.style.setProperty("opacity", "1")
    }  
})

form.check.addEventListener('input',(e)=>{
    e.preventDefault()
    // console.log(e.target.value)
    if (!check) {
     
        fe7.style.setProperty("visibility", "hidden")
        fe7.style.setProperty("opacity", "0")
    }
    else{
        
        fe7.textContent = "Acepte el campo terminos de uso "
        fe7.style.setProperty("visibility", "visible")
        fe7.style.setProperty("opacity", "1")
    }  
})

let btn = document.getElementById("check")
let ventana = document.getElementById("ventana")
let close = document.getElementById("cerrarModal")

//Mostrar Ventana Modal 

btn.addEventListener("click",()=>{
    ventana.style.display = "block"
})

btn.addEventListener("click",()=>{
    ventana.style.display = "block"
})

window.addEventListener("click",function(event) {
    if (event.target == ventana) {
        ventana.style.display = "none"
    }
})
