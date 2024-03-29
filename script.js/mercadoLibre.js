class Automovil{
    constructor (marca, modelo, precio, anyo, kilometros, ciudad, imagen){

        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometros = kilometros;
        this.ciudad = ciudad;
        this.imagen = imagen;
        
    }
}
let auto1 =new Automovil("Mazda CX5 ","Carbon Edition", "$172.350.000", "2024", "0km", "Morato-Suba-Bogotá" ,"img/MazdaBlanco-1000x521.jpg");
let auto2 =new Automovil("Ferrari Portofino","", "$1.350.000.000", "2019", "16.900km", "Ferrari-Colombia" ,"img/Rojito.webp");
let auto3 =new Automovil("Chevrolet Camaro", "", "$254.000.000", "2023", "0km", "Usaquén-Bogotá D.C", "img/Camaro.jpg");
let auto4 =new Automovil("Bmw Cabriolet", "M4 3.0 M4 F83", "$265.000.000", "2018", "15.100km", "Cota-Cundinamarca", "img/bmw.webp");
let auto5 =new Automovil("Mazda 3 2.0 ","Grand Touring Lx", "$80.000.000", "2020", "64.000 km ", "Mazurén - Suba - Bogotá D.C." ,"img/Mazda-negro.webp");


let boxProductos = document.getElementById("boxProductos");

cargarAutomovil(auto1);
cargarAutomovil(auto2);
cargarAutomovil(auto3);
cargarAutomovil(auto4);
cargarAutomovil(auto5);

window.addEventListener("keydown", (event) => {
    let inputBusqueda = document.getElementById("inputBusqueda").value;
    if(event.key == "Enter"){
        boxProductos.innerHTML = "";
        let inputBusquedaAux = inputBusqueda.toLowerCase();        
        if(inputBusquedaAux == "mazda"){
        cargarAutomovil(auto1);
        cargarAutomovil(auto5);
    }
    else if(inputBusquedaAux == "ferrari"){
        cargarAutomovil(auto2);
    }
    else if(inputBusquedaAux == "chevrolet"){
        cargarAutomovil(auto3);
    }
    else if (inputBusquedaAux == "bmw"){
        cargarAutomovil(auto4);
    }
 }
});
function cargarAutomovil(auto){



/* Contenedor para los productos individuales */
let boxProducto = document.createElement("div");
boxProductos.appendChild(boxProducto);
boxProducto.setAttribute("class","box-producto");

/* Contenedor para la imagen */
let boxImagen = document.createElement("div");
boxProducto.appendChild(boxImagen);
boxImagen.setAttribute("class","box-imagen");
let imagenProducto = document.createElement("img");
boxImagen.appendChild(imagenProducto);
imagenProducto.setAttribute("src",auto.imagen);
imagenProducto.setAttribute("class","imagen-producto")

/* Contenedor para la informacion */ 
let infoProducto = document.createElement("div");
boxProducto.appendChild(infoProducto);
infoProducto.setAttribute("class","box-info-producto");

//Marca
let marcaProducto = document.createElement("label");
infoProducto.appendChild(marcaProducto);
let nodoMarcaProducto = document.createTextNode(auto.marca);
marcaProducto.appendChild(nodoMarcaProducto);
marcaProducto.setAttribute("class", "marca-producto");

//Modelo
let modeloProducto = document.createElement("div");
infoProducto.appendChild(modeloProducto);
let nodoModeloProducto= document.createTextNode(auto.modelo);
modeloProducto.appendChild(nodoModeloProducto);
modeloProducto.setAttribute("class", "modelo-producto");

//Precio
let precioProducto = document.createElement("div");
infoProducto.appendChild(precioProducto);
let nodoPrecioProducto = document.createTextNode(auto.precio);
precioProducto.appendChild(nodoPrecioProducto);
precioProducto.setAttribute("class", "precio-producto");

//Año
let anyoProducto = document.createElement("label");
infoProducto.appendChild(anyoProducto);
let nodoAnyoProducto = document.createTextNode(auto.anyo + "·");
anyoProducto.appendChild(nodoAnyoProducto);
anyoProducto.setAttribute("class", "anyo-producto");

//Kilometraje
let kilometrajeProducto = document.createElement("label");
infoProducto.appendChild(kilometrajeProducto);
let nodoKilometrajeProducto = document.createTextNode(auto.kilometros +"·");
kilometrajeProducto.appendChild(nodoKilometrajeProducto);
kilometrajeProducto.setAttribute("class", "kilometraje");


//Ciudad
let ciudadProducto = document.createElement("label");
infoProducto.appendChild(ciudadProducto);
let nodoCiudadProducto = document.createTextNode(auto.ciudad);
ciudadProducto.appendChild(nodoCiudadProducto);
ciudadProducto.setAttribute("class", "ciudad");

}


