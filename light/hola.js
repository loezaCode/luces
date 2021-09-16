var estado = "apagado";
const foco = document.getElementById("contenedor");

var lista =["#2C5364"];
var lista_dos =["#ffff"];

function controlar(){
    if(estado=="apagado"){
        estado= "encendido";
        console.log("prendido");
        foco.classList.add("active");
        color();

    } else{
        estado = "apagado";
        console.log("apagado");
        foco.classList.remove("active")
        off();
        
    }
}

function color(){
    document.body.style.backgroundColor = lista[0];
}

function off(){
    document.body.style.backgroundColor = lista_dos[0];
}