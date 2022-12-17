function verificarRespuestasDificiles() {

  var total = 5;
  var puntos = 0;

  var myForm = document.forms["triviaFormDificiles"];
  var respuestas = ["b", "c", "b", "b", "a"];

  for (var i = 1; i <= total; i++) {
    if (myForm["h-q" + i].value === null || myForm["h-q" + i].value === "") {
      alert("Por favor responde la pregunta " + i);
      return false;
    } else {
      if (myForm["h-q" + i].value === respuestas[i - 1]) {
        puntos++;
      }
    }
  }

  var resultados = document.getElementById("resultadosDificiles");
  resultados.innerHTML = '<h3>Obtuviste <span>' + puntos + '</span> de <span>' + total + ' puntos </span></h3>';
  return false;

}