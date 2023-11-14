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
let auto1 =new Automovil("Mazda cx5 Carbon Edition","", "$172.350.000", "2024", "0km", "Morato-Suba-Bogotá" ,"img/MazdaBlanco-1000x521.jpg");
let auto2 =new Automovil("Ferrari Portofino","", "$1.350.000.000", "2019", "16.900km", "Ferrari Colombia" ,"img/Rojito.webp");


let boxProductos = document.getElementById("boxProductos");

cargarAutomovil(auto1);
cargarAutomovil(auto2);


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


