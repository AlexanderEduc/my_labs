function agregar() {
    var lista = document.getElementById("lista");
    var cantidadElementos = lista.getElementsByTagName("li").length;
    var nuevoElemento = document.createElement("li");
    
    nuevoElemento.textContent = "Elemento" + (cantidadElementos + 1);
    lista.appendChild(nuevoElemento);
}

