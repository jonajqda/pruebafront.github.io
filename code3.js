
function mostrarPopup(mensaje) {
   
    var popup = document.getElementById("popup");
    var mensajePopup = document.getElementById("popup-message");

  
    mensajePopup.textContent = mensaje;

   
    popup.style.display = "block";
}


function ocultarPopup() {
    
    document.getElementById("popup").style.display = "none";
}


document.getElementById("close-popup").addEventListener("click", ocultarPopup);


function verificarRespuesta(respuestaSeleccionada) {
    
    var respuestaCorrecta = "ROMA";

    
    if (respuestaSeleccionada === respuestaCorrecta) {
        mostrarPopup("¡Felicidades, has acertado!");
    } else {
        mostrarPopup("¡Prueba de nuevo!, la respuesta es incorrecta.");
    }
}


var respuestas = document.querySelectorAll("#answers li");
respuestas.forEach(function(respuesta) {
    respuesta.addEventListener("click", function() {
        var respuestaSeleccionada = this.getAttribute("data-answer");
        verificarRespuesta(respuestaSeleccionada);
    });
});
