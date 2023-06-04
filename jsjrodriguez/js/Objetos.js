/*const instructor={
    nombre:prompt("Ingrese el nombre del instructor"),
    apelido:prompt("Ingrese el apellido del instructor"),
    materia:prompt("Ingrese la materia del intructor"),

    imprimirInstructor(){
        alert(`El instructor se llama ${this.nombre} su apellido es ${this.apelido} y la materia es ${this.materia}`)
    }
}*/

//Creacion array para objetos

let instructores=[{nombre:"Jennifer", apellido:"Fajardo", materia:"Js"}]
elec=1

let instructor={
    nombre: "",
    apellido:"",
    materia:""
}

while(elec==1){
    let op = prompt("1. Ingresar instructor 2. Ver instructores 3. Buscar instructor 4. Modificar instructor 5. Eliminar instructor 6. Ordenar A-Z")
    switch(op){
        case "1":
            let instructor={
                nombre:prompt("Ingrese el nombre del instructor"),
                apellido:prompt("Ingrese el apellido del instructor"),
                materia:prompt("Ingrese la materia del intructor")
            }
            instructores.push(instructor)
            console.log(instructores)
        break;

        case "2":
           Object.entries(instructores)
           .map(entry =>{
            const [key, value] = entry
            console.log({key,value})
           })
        break;

        case "3":
              busqueda = prompt("Ingrese el nombre del instructor")
              buscar = instructores.find(instructores=> instructores.nombre == busqueda )
             console.log(instructores)
        break;

        case "4":
            let update = prompt("Ingrese la posicion a modificar")
            instructores[update].nombre = prompt("Ingrese el nombre del instructor")
            instructores[update].apellido = prompt("Ingrese el apellido del instructor"),
            instructores[update].materia = prompt("Ingrese la materia del intructor")
            console.log(instructores)
            
        break;

        case "5":
            instructores.splice(prompt("Ingrese la posicion a eliminar"),1)
            console.log(instructores)
        break;

        case "6":
            instructores.sort((a,b) => {
                if(a.nombre < b.nombre && a.apellido < b.apellido && a.materia < b.materia){
                    return -1
                }
                if(a.nombre > b.nombre && a.apellido > b.apellido && a.materia > b.materia){
                    return 1
                }

                return 0
            })
            console.log(instructores)
        break;

        default:
            alert("Opcion invalida")
        break;
    }

    elec = prompt("Deseas volver a digitar 1. SI 2. NO")

}