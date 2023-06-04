let name=prompt("Ingrese su nombre");
let valorG=parseInt(prompt("Ingrese el valor global"));
let elec=1;

let lanzar= function(){
return parseInt(Math.random()*2);
}

let lanzamiento= lanzar();
        
let ganar= ()=>{
    ganancias = apuesta*2;
    valorGG = valorG-apuesta;
    valorGG1 = valorG+ganancias;
    return valorGG1
}
        
let perder= ()=>{
    valorGP= valorG-apuesta;
    return valorGP;
} 

    while(elec==1){

    var apuesta=parseInt(prompt("Cuanto desea apostar"));
    var moneda=parseInt(prompt("Cual escoge?  1. Cara 2. Sello"));

    lanzamiento=lanzar();
    if(apuesta<=valorG){
        if(moneda==1 && lanzamiento==1  || moneda==2 && lanzamiento==0){
            alert(`Ganaste el doble de tu apuesta, tu valor global es ${ganar()}`)
            valorG=ganar();

        } else if(esco==1 && lanzamiento==0 || esco==2 && lanzamiento==1){
            alert(`Perdiste, lo apostado, ahora tu valor global es ${perder()}`)
            valorG=perder();
        } 
    } else {
        alert("Estas apostando mas que el valor global")
    }


    seguir=confirm("Desea hacer otra apuesta 1.SI 2.NO ");
    }