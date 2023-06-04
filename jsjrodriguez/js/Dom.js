// ACCEDER AL ELEMENTO POR ID

let contenido=document.getElementById("features")
console.log(contenido)

//ACCEDER AL ELEMENTO POR SU SELECTOR

let cont = document.querySelector("p")
console.log(cont)

//ACCEDER AL ELEMENTO POR SELECTOR ID

let cont2 = document.querySelector("#features")
console.log(cont2)

//ACCEDER AL ELEMENTO POR SU CLASE 

let cont3 = document.querySelector(".feature")
console.log(cont3)

//ACCEDER A VARIOS ELEMENTOS

let cont4 = document.querySelectorAll("p")
console.log(cont4)

//ACCEDER A NOTE LIST

let cont5 = document.querySelectorAll("p")[0]
console.log(cont5)

//RECORRER NOTE LIST 

document.querySelectorAll("p").forEach((el)=>console.log(el))

//EJEMPLO ACCSESO FORMULARIO

let num1 = document.getElementById("n1").name
console.log(num1)
/* 
//ACCEDER A UN ATRIBUTO 
document.querySelector("a").getAttribute("href")

//CAMBIAR EL VALOR DE UN ATRIBUTO  

document.querySelector("a").setAttribute("href","https://www.youtube.com/")

//ACCERDER AL ATRIBUTO STYLE PARA CAMBIAR ESTILOS 

let mys=document.querySelector("#features")
mys.style.setProperty("color","#f81616")
mys.style.setProperty("background-color","#black")

//ACCEDER A UN SELECTOR Y CAMBIAR SU CONTENIDO 

let cam = document.querySelector(".feature")

let text =`
<h1>Otro titulo</h1>
<p>Un parrafo</p>`

cam.textContent = text
cam.innerHTML=text 

let m = document.querySelector("h1")

let text =`
<h1>Este es el feature 1</h1>
`
m.innerHTML=text

let m2 = document.querySelector(".feature-2")

let text2 =`
<h1>Johan</h1>
<p>Aprendiz Ficha: 2687390 de ADSO</p>
`
m2.innerHTML=text2*/

//CREAR CONTENIDO EN EL DOM 

let img1=document.createElement("img")
img1.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jiULsMy7jk4HPyATiYoz-FPvkH66JrUaNFWI68cLgQ&s"

document.body.appendChild(img1)

let caja = document.createElement("div")
caja.innerHTML=`<img src="img/ii.png"/>`

document.body.appendChild(caja)

document.body.removeChild(caja) 