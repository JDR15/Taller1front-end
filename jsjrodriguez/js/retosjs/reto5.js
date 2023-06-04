// PRIMERA VENTANA

let btn_cp = document.getElementById("circulop")
let btn_ca = document.getElementById("circuloa")
let ventana = document.getElementById("ventana")
let close = document.getElementById("cerrarModal")

//Mostrar Ventana Modal 

btn_cp.addEventListener("click",()=>{
    ventana.style.display = "block"
})

btn_ca.addEventListener("click",()=>{
    ventana.style.display = "block"
})

window.addEventListener("click",function(event) {
    if (event.target == ventana) {
        ventana.style.display = "none"
    }
})

// FUNCIONES PRIMERA VENTANA 

function calcularPerimetro() {

    let radio = parseFloat(document.getElementById('radio').value)
    let perimetro = 2 * Math.PI * radio
    document.querySelector('.resultado').innerHTML = `<p> El perímetro del círculo es: ${perimetro} </p>`
}

function calcularArea() {
    let radio = parseFloat(document.getElementById('radio').value)
    let area = Math.PI * Math.pow(radio, 2)
    document.querySelector('.resultado').innerHTML = `<p> El área del círculo es: ${area} </p>`
}   


// SEGUNDA VENTANA

let btn_tp = document.getElementById("triangulop")
let btn_ta = document.getElementById("trianguloa")
let v2 = document.getElementById("ventana-2")
let c = document.getElementById("cerrarModal-2")

//Mostrar Ventana Modal 

btn_tp.addEventListener("click",()=>{
    v2.style.display = "block"
})

btn_ta.addEventListener("click",()=>{
    v2.style.display = "block"
})

window.addEventListener("click",function(event) {
    if (event.target == v2) {
        v2.style.display = "none"
    }
})

// FUNCIONES SEGUNDA VENTANA 

function calcularPerimetroT() {

    let lA = parseInt(document.getElementById("ladoA").value)
    let lB = parseInt(document.getElementById("ladoB").value)
    let lC = parseInt(document.getElementById("ladoC").value)
    
    let p = lA + lB + lC

    document.querySelector('.resultado-2').innerHTML = `<p> El perímetro del Triángulo es: ${p} </p>`
}

function calcularAreaT() {

    let lA = parseInt(document.getElementById("ladoA").value)
    let lB = parseInt(document.getElementById("ladoB").value)
    let lC = parseInt(document.getElementById("ladoC").value)

    let sp = lA+lB+lC / 2;
    let area = Math.sqrt(sp * (sp - lA) * (sp - lB) * (sp - lC))

    document.querySelector('.resultado-2').innerHTML = `<p> El área del Triángulo es: ${area} </p>`
}


// TERCERA VENTANA

let btn_rp = document.getElementById("rectangulop")
let btn_ra = document.getElementById("rectanguloa")
let v3 = document.getElementById("ventana-3")
let c3 = document.getElementById("cerrarModal-3")

//Mostrar Ventana Modal 

btn_rp.addEventListener("click",()=>{
    v3.style.display = "block"
})

btn_ra.addEventListener("click",()=>{
    v3.style.display = "block"
})

window.addEventListener("click",function(event) {
    if (event.target == v3) {
        v3.style.display = "none"
    }
})


// FUNCIONES TERCERA VENTANA 

function calcularPerimetroR() {

    let long = parseInt(document.getElementById("largo").value)
    let wide = parseInt(document.getElementById("ancho").value)

    let p = 2 * (long + wide)

    document.querySelector('.resultado-3').innerHTML = `<p> El perímetro del Rectángulo es: ${p} </p>`
}

function calcularAreaR() {

    let long = parseInt(document.getElementById("largo").value)
    let wide = parseInt(document.getElementById("ancho").value)

    let a = long * wide

    document.querySelector('.resultado-3').innerHTML = `<p> El área del Rectángulo es: ${a} </p>`
}


// TERCERA VENTANA

let btn_lp = document.getElementById("cuadradop")
let btn_la = document.getElementById("cuadradoa")
let v4 = document.getElementById("ventana-4")
let c4 = document.getElementById("cerrarModal-4")

//Mostrar Ventana Modal 

btn_lp.addEventListener("click",()=>{
    v4.style.display = "block"
})

btn_la.addEventListener("click",()=>{
    v4.style.display = "block"
})

window.addEventListener("click",function(event) {
    if (event.target == v4) {
        v4.style.display = "none"
    }
})


// FUNCIONES TERCERA VENTANA 

function calcularPerimetroC() {

    let side = parseInt(document.getElementById("lado").value)
    
    let p = 2 * side

    document.querySelector('.resultado-4').innerHTML = `<p> El perímetro del Cuadrado es: ${p} </p>`
}

function calcularAreaC() {

    let side = parseInt(document.getElementById("lado").value)

    let a = side * side

    document.querySelector('.resultado-4').innerHTML = `<p> El área del Cuadrado es: ${a} </p>`
}
