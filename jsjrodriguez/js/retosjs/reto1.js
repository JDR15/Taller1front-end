let btn = document.getElementById("btn")

//ESCUCHAR EVENTO 

btn.addEventListener("click", function palabras(event){
    event.preventDefault()
    let input = document.getElementById("pal")
    let op = parseInt(document.getElementById("op").value)
    switch(op){
        case 1:

        let pal = input.value
        let longitud = pal.length

        let res1 = document.querySelector(".resultado")
        res1.innerHTML = `<p>La longitud de la palabra es ${longitud} </p>`
    
        break

        case 2:

            let pal2 = input.value
            let mayus = pal2.toUpperCase() 

            let res2= document.querySelector(".resultado")
            res2.innerHTML = `<p> La palabra se cambio a ${mayus} </p>`
    
        break

        case 3:

            let pal3 = input.value
            let minus = pal3.toLowerCase()

            let res3= document.querySelector(".resultado")
            res3.innerHTML = `<p> La palabra se cambio a ${minus} </p>`

        break

        case 4:

            let pal4 = input.value
            let carac = pal4.substr(0,1)

            let res4= document.querySelector(".resultado")
            res4.innerHTML = `<p> El primer caracter es ${carac} </p>`

        break

        

        }   
}
)