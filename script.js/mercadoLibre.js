let boxProductos = document.getElementById("boxProductos");

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
imagenProducto.setAttribute("src","img/MazdaBlanco.jpg");
imagenProducto.setAttribute("class","imagen-producto")

/* Contenedor para la informacion */ 
let infoProducto = document.createElement("div");
boxProducto.appendChild(infoProducto);
infoProducto.setAttribute("class","box-info-producto");

let marcaProducto = document.createElement("label");
infoProducto.appendChild(marcaProducto);
let nodoMarcaProducto = document.createTextNode("MAZDA CX5 CARBON EDITION");
marcaProducto.appendChild(nodoMarcaProducto);

let marcaProducto2 = document.createElement("div");
infoProducto.appendChild(marcaProducto2);
let nodoMarcaProducto2 = document.createTextNode("172.350.000");
marcaProducto2.appendChild(nodoMarcaProducto2);

let marcaProducto3 = document.createElement("div");
infoProducto.appendChild(marcaProducto3);
let nodoMarcaProducto3 = document.createTextNode("2024");
marcaProducto3.appendChild(nodoMarcaProducto3);

let marcaProducto4 = document.createElement("div");
infoProducto.appendChild(marcaProducto4);
let nodoMarcaProducto4 = document.createTextNode("0 Km");
marcaProducto4.appendChild(nodoMarcaProducto4);

let marcaProducto5 = document.createElement("div");
infoProducto.appendChild(marcaProducto5);
let nodoMarcaProducto5 = document.createTextNode("Morato-Suba-Bogotá D.C.");
marcaProducto5.appendChild(nodoMarcaProducto5);

