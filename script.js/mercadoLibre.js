let mainContent = document.getElementById("mainContent");

let boxProducto = document.createElement("div");
mainContent.appendChild(boxProducto);
boxProducto.setAttribute("class", "box-producto");

let marcaProducto = document.createElement("label");
mainContent.appendChild(marcaProducto);

let marcaProductoTxt = document.createElement("label");
mainContent.appendChild("marcaProducto");
let nodoMarcaProducto = document.createTextNode("Mazda");
marcaProducto.appendChild(nodoMarcaProducto);