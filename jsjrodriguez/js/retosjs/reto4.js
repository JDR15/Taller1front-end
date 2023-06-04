let btn = document.getElementById("btn")

//ESCUCHAR EVENTO 

btn.addEventListener("click", function consulta(e) {
    e.preventDefault()
    let nom= parseInt(document.getElementById("nom").value)
    let ape= parseInt(document.getElementById("ape").value)
    let asig= parseInt(document.getElementById("asig").value)
    
   let res;

    if(nom == 1 && ape == 1 && asig == 1){
        res = " Correcta"
    }
    else if (nom == 2 && ape == 2 && asig == 2){
        res = " Correcta"
    }
    else if (nom == 3 && ape == 3 && asig == 3){
        res = " Correcta"
    }
    else{
        res = " Incorrecta"
    }
    
    document.querySelector(".resultado").innerHTML = `<p> La respuesta es: ${res} </p>`
}

)
