function verificarRespuestas() {

  var total = 5;
  var puntos = 0;

  var myForm = document.forms["triviaForm"];
  var respuestas = ["b", "a", "a", "b", "c"];

  for (var i = 1; i <= total; i++) {
    if (myForm["q" + i].value === null || myForm["q" + i].value === "") {
      alert("Por favor responde la pregunta " + i);
      return false;
    } else {
      if (myForm["q" + i].value === respuestas[i - 1]) {
        puntos++;
      }
    }
  }

  var resultados = document.getElementById("resultados");
  resultados.innerHTML = '<h3>Obtuviste <span>' + puntos + '</span> de <span>' + total + ' puntos </span></h3>';
  return false;

}