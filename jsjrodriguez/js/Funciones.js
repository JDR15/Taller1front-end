/*Creacion de funciones */

//Metodo 1 funcion por declaracion

/*function saludar(){
    //Cuerpo o tareas de la funcion
    console.log("Buenos dias por la mañana ")
}
//Invocar o llamar funcion 
saludar()*/

numberOne = parseInt(prompt("Ingrese el primer numero"))
numberTwo = parseInt(prompt("Ingrese el segundo numero"))

/*function sumar(){
    console.log(`La suma entre ${numberOne} y ${numberTwo} es ${numberOne+numberTwo}`)
}*/

//Parametros
/*function sumar(n1,n2){
    console.log(`La suma entre ${n1} y ${n2} es ${n1+n2}`)
}
sumar(numberOne,numberTwo)*/

// funciones con valor de retorno

function sumar (n1,n2){
   let suma=n1+n2
    return suma
}

console.log(`La suma es "${(sumar (15,26))}`)
let res=sumar(numberOne,numberTwo)

//Metodo 2 funcion por expresion 

let restar=function resta(n1,n2){
    console.log(`La resta entre ${n1} y ${n2} es ${n1-n2}`)
}
//Se invoca con el nombre de la variable 
restar(numberOne,numberTwo)

//Metod 3 anonimo --> no tiene nombre en la funcion 

let mult = function(n1,n2){
    return n1,n2
}

console.log(`La multiplicacion de los numeros es ${mult(numberOne,numberTwo)}`)

//Metodo 4 arrow o flecha

let div=(n1,n2)=>{
    console.log(`La division entre ${n1} y ${n2} es ${n1/n2}`)
}

div(numberOne,numberTwo)