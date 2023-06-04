let btn = document.getElementById("btn")

//ESCUCHAR EVENTO 

btn.addEventListener("click", function convTemperatura(e) {
    e.preventDefault()
    let temp= document.getElementById("temp").value
    let convD = document.getElementById("convD").value
    let convA = document.getElementById("convA").value
    
    let res

    
    if (convD === convA) {
        res = temp
    } else if (convD === "celsius") {
        if (convA === "fahrenheit") {
            res = temp * 9/5 + 32;
        } else if (convA === "kelvin") {
            res = parseFloat(temp) + 273.15
        }
    } else if (convD === "fahrenheit") {
        if (convA === "celsius") {
            res = (temp - 32) * 5/9;
        } else if (convA === "kelvin") {
            res = (temp - 32) * 5/9 + 273.15
        }
    } else if (convD === "kelvin") {
        if (convA === "celsius") {
            res = temp - 273.15;
        } else if (convA === "fahrenheit") {
            res = (temp - 273.15) * 9/5 + 32
        }
    }
    
    document.querySelector(".resultado").innerHTML = `<p> Resultado: ${res} </p>`
}

)
