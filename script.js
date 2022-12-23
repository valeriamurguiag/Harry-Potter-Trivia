function verificarRespuestas() {

  var total = 5;
  var puntos = 0;

  var myForm = document.forms["triviaForm"];
  var respuestas = ["b", "a", "a", "b", "c"];

  for (var i = 1; i <= total; i++) {
    if (myForm["q" + i].value === null || myForm["q" + i].value === "") {
      alert("Please answer question " + i);
      return false;
    } else {
      if (myForm["q" + i].value === respuestas[i - 1]) {
        puntos++;
      }
    }
  }

  var resultados = document.getElementById("resultados");
  resultados.className = "class-easyQuestions2";
  resultados.innerHTML = '<h3>You got <span>' + puntos + '</span> out of <span>' + total + ' points </span></h3>';
  return false;
}
