let btn = document.getElementById("btnCalcular")

//ESCUCHAR EVENTO 

btn.addEventListener("click", function calcular(e){
    e.preventDefault()
    //Entradas 
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let op = parseInt(document.getElementById("op").value)

    //alert(`El numero 1 es: ${num1} el numero dos es: ${num2} y la opcion es: ${op}`)

    switch(op){
        case 1:
            let suma=num1+num2

            let res1 = document.querySelector(".resultado")
            res1.innerHTML = `<p> La suma entre ${num1} y ${num2} es ${suma}</p>`

        break

        case 2:
            let rest = num1-num2
            
            let res2 = document.querySelector(".resultado")
            res2.innerHTML = `<p> La resta entre ${num1} y ${num2} es ${rest}</p>`
    
            break

        case 3:

            let mult = num1*num2

            let res3 = document.querySelector(".resultado")
            res3.innerHTML = `<p> La multiplicación entre ${num1} y ${num2} es ${mult}</p>`

        break


        case 4:

            let div = num1/num2

            let res4 = document.querySelector(".resultado")
            res4.innerHTML = `<p> La división entre ${num1} y ${num2} es ${div}</p>`

        break


        }   
}
)