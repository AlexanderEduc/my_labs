function agregar() {
    var lista = document.getElementById("lista");
    var cantidadElementos = lista.getElementsByTagName("li").length;
    var nuevoElemento = document.createElement("li");
    
    nuevoElemento.textContent = "Elemento" + (cantidadElementos + 1);
    lista.appendChild(nuevoElemento);
}

function cambiarFondo() {
    if (document.body.style.backgroundColor === "lightblue") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
}

function borrar() {
    var lista = document.getElementById("lista");
    var elementos = lista.getElementsByTagName("li");
    
    if (elementos.length > 0) {
        lista.removeChild(elementos[elementos.length - 1]);
    }
}
