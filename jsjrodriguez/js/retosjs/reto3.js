let btn = document.getElementById("btn")

//ESCUCHAR EVENTO 
btn.addEventListener("click", function triangulos(e) {
    e.preventDefault()
  let l1 = document.getElementById("side1").value;
  let l2 = document.getElementById("side2").value;
  let l3 = document.getElementById("side3").value;

  let res 

  if (l1 == l2 && l2 == l3) {
    res = "Equilatero"
  }
  else if(l1 === l2 || l2 === l3 || l1 === l3){
   res = "Isósceles"
  }
  else {
   res = "Escaleno"
  }

    document.querySelector(".resultado").innerHTML = `<p> El triangulo es: ${res} </p>`
}
 
)
