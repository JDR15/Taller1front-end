console.log("Hola desde afuera")

let numberOne;
let numberTwo;
let name = "Johan";
let age = 19;
let state = true;
let resultado ;

const iva = 19;

//console.log(`Mi nombre es ${name} y
//tengo ${age} años, el iva de mi edad es ${age*iva/100}`)

numberOne = prompt("Ingrese el primer numero")
numberTwo = parseInt(prompt("Ingrese el segundo numero"))

//resultado =parseInt(numberOne)+(numberTwo);

//alert(" La suma es "+resultado)

/*Condicionales*/
/*if (numberOne>numberTwo) {
    alert(`El numero mayor es ${numberOne}`)
} else {
    alert(`Èl numero menor es ${numberTwo}`)
}
 
/* Variacion  condicioal doble  */

/*let numMayor = (numberOne>numberTwo)
?"El numero mayor es el primero": //Si la condicion se cumple 
"El numero menor es el segundo " // Si la condicion no se cumple 

console.log(numMayor)

/*CICLO DETERMINADO*/

/*for(let i=1 ; i<=5; i++){
    console.log("Hola estoy dentro del ciclo")
}

/*CICLO WHILE INDETERMINADO */

/*seguir="si"

while(seguir=="si"){
    console.log("Hola estoy dentro del ciclo while")
    seguir=prompt("Desea continuar")
}*/

/*seguir=1

while(seguir==1){
    console.log("Hola estoy dentro del ciclo while")
    seguir=pprompt("Desea continuar")
}*/

seguir=true

while(seguir==true){
    console.log("Hola estoy dentro del ciclo while")
    seguir=prompt("Desea continuar")
}
