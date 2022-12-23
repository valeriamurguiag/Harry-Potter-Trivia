function verificarRespuestasDificiles() {

  var total = 5;
  var puntos = 0;

  var myForm = document.forms["triviaFormDificiles"];
  var respuestas = ["b", "c", "b", "b", "a"];

  for (var i = 1; i <= total; i++) {
    if (myForm["h-q" + i].value === null || myForm["h-q" + i].value === "") {
      alert("Please answer question " + i);
      return false;
    } else {
      if (myForm["h-q" + i].value === respuestas[i - 1]) {
        puntos++;
      }
    }
  }

  var resultados = document.getElementById("resultadosDificiles");
  resultados.className ="class-easyQuestions2";
  resultados.innerHTML = '<h3>You got <span>' + puntos + '</span> out of <span>' + total + ' points </span></h3>';
  return false;
}
