let inputBusqueda = document.getElementById("inputBusqueda");
let btngraficar = document.getElementById("btngraficar");


let boxEstrellas = document.getElementById("boxEstrellas");
 let boxEstrella1 = document.createElement("i");
 let boxEstrella2 = document.createElement("i");
 let boxEstrella3 = document.createElement("i");
 let boxEstrella4 = document.createElement("i");
 let boxEstrella5 = document.createElement("i");
 
window.addEventListener("load",function(){
    boxEstrellas.appendChild(boxEstrella1);
    boxEstrellas.appendChild(boxEstrella2);
    boxEstrellas.appendChild(boxEstrella3);
    boxEstrellas.appendChild(boxEstrella4);
    boxEstrellas.appendChild(boxEstrella5);
})
btngraficar.addEventListener("click", function (){
    let calificacion = parseInt(inputBusqueda.value);
    if(calificacion >= 0 && calificacion <= 0.2){
        boxEstrella1.setAttribute("class","fa-regular fa-star");
        boxEstrella2.setAttribute("class","fa-regular fa-star");
        boxEstrella3.setAttribute("class","fa-regular fa-star");
        boxEstrella4.setAttribute("class","fa-regular fa-star");
        boxEstrella5.setAttribute("class","fa-regular fa-star");
    }
   
    /* boxEstrellas.appendChild(boxEstrella);
    boxEstrella.setAttribute("class", "fa-solid fa-star"); */

});