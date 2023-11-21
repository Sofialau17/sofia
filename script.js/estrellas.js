let inputBusqueda = document.getElementById("inputBusqueda");
let btnGraficar = document.getElementById("btnGraficar");
let boxEstrella = document.getElementById("boxEstrellas");


btnGraficar.addEventListener("click", function(){
    let boxEstrella = document.createAttribute("i");
    boxEstrella.appendChild(boxEstrella);
    boxEstrella.setAtrtibute("class", "fa-solid fa-star");

});