/*let name = prompt("Ingrese su nombre");
let age = parseInt (prompt("Ingrese su edad"));
let num = parseInt (15);

num = age+num

alert(`${name} tiene ${age} años, en 15 tendra ${num}`)*/

/*let user = prompt("Ingrese su Usuario")
let password = prompt("Ingrese su contraseña")

if(user=="Johan" && password=="jdr"){
    alert("Bienvenido al sistema ")
}else if(user=="Johan" && password!=="jdr"){
    alert("Upps!, parece que tus datos de acceso son incorrectos ")
}else if (user!=="Johan" && password=="jdr"){
    alert("Nombre de usuario incorrecto ")
}else  {
    alert("ACCESO DENEGADO ")
}*/
    let name = "Johan"
    let lastName = "Rodriguez" 
    let doc = "C.C"
    let num = "1000223779"
    let elec = 1


while(elec==1){
    let op = prompt("1. Ingresar estudiante 2. Ver Estudiante 3. Modificar estudiante ");

switch(op){
    case "1":
     name = prompt("Ingrese el nombre")
     lastName = prompt("Ingrese su apellido ")
     doc = prompt("Ingrese su tipo de documento")
     num = prompt("Ingrese el numero del documento")
    break;
        
    case "2":
        let search = prompt("Ingrese el nombre de le estudiante")
        if(search == "Johan"){
        alert(`El estudiante ${name} ${lastName} identificado con ${doc} No. ${num}`)
        }else{
            alert("Estudiante no encontrado")
        }
    break;

    case "3":
        let update = prompt(" 1. Nombre 2. Apellido 3. Documento 4. Numero")

        if(update==1){
            name = prompt("Ingrese el nombre")
        }else if(update==2){
            lastName = prompt("Ingrese su apellido ")
        }else if(update==3){
            doc = prompt("Ingrese su tipo de documento")
        }else if(update==4){
            num = prompt("Ingrese el numero del documento")
        }

    break;

    default:
       alert("Opcion invalida")
        break;
    }

    elec = prompt("Deseas volver a digitar 1. Si 2. NO")
}

