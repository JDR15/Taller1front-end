//Crear array

/*let onces=["empanada","tamal"]

//imprimir array
console.log[onces]

//Acceder a un elemento del array 
elemento1=onces[1]
console.log (onces[1])
console.log(elemento1)
//Ultima posicion 
console.log(onces[onces.length-1])

//Rcorrer un array
onces.forEach(function(valor,posicion,array){
    console.log(`en la posicion ${posicion} hay ${valor}`)
})

//Añadir elementos al final del array 
onces.push("Jugo")
onces.push("huevo")
onces.push("chocorramo")
console.log(onces)

//elimiar el ultimo elemento del array 
onces.pop()
console.log(onces)

//Añadir elemento al inicio del array
onces.unshift("Chocorramo")
console.log(onces)

//Eliminar primer elemento 
onces.shift()
console.log(onces)

//Eliminar desde una posicion
onces.splice(1,1)
console.log(onces)

//Metodo busqueda filter
let busqueda1=onces.filter(onces=>onces=="tamal")
console.log(busqueda1)

//Metodo busqueda find
let busqueda2=onces.find(onces=>onces=="jugo")
console.log*/

let elec = 1 
let apren =["Johan", "Jaider", "Luis"]


while(elec==1){
    let op = prompt("1. Ingresar estudiante 2. Ver Estudiante 3. Buscar Estudiante 4. Modificar Estudiante 5. Borrar Elemento 6. Ordenar A-Z");

switch(op){
    case "1":
        apren.push(prompt("Ingrese el estudiante"))
        console.log(apren)
    break;
        
    case "2":
     apren.forEach(function(valor,posicion){
        alert(`En la posicion ${posicion} se encuentra ${valor}`)
    })
    break;

    case "3":
      elemento = apren[prompt("Ingrese la posicion del estudiante a buscar")]
        alert(elemento)
    break;

    case "4":
    apren.splice(prompt("Ingrese la posicion a modificar"),1 ,prompt("Ingrese el nuevo dato"))
    alert(apren)
    break;

    case "5":
     apren.splice(prompt("Ingrese la posicion a eliminar"),1)
        alert(apren)
    break;

    case "6":
     apren.sort()
        alert(apren)
    break;

    default:
       alert("Opcion invalida")
        break;
    }

    elec = prompt("Deseas volver a digitar 1. SI 2. NO")
}