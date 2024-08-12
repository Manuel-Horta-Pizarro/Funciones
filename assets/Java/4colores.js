
const divAzul = document.getElementById("divAzul");
const divRojo = document.getElementById("divRojo");
const divVerde = document.getElementById("divVerde");
const divAmarillo = document.getElementById("divAmarillo");   


function cambiarColor(elemento) {
    elemento.style.backgroundColor = "black";
}

divAzul.addEventListener("click", function() {
    cambiarColor(divAzul);
});
divRojo.addEventListener("click", function() {
    cambiarColor(divRojo);
});
divVerde.addEventListener("click", function() {
    cambiarColor(divVerde);
});
divAmarillo.addEventListener("click", function() {
    cambiarColor(divAmarillo);
});