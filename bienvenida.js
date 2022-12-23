//Creo una variable que obtenga el elemento HTML que activará la función
const logIn = document.getElementById("ingresar");
//Asigno un evento click
logIn.addEventListener("click", () => {
  //Creo una variable con el valor de name
  const name = document.getElementById("name").value
  //Establezco la condición principal, mostrar un alert
  if (name.value === null || name === "") {
    alert("Please enter your name")
    //Establezco la condición secundaria, añadir un saludo personalizado
  } else {
    const saludo = document.getElementById("saludo");
    saludo.className = 'text4';
    saludo.innerHTML = '<h2> Welcome <span> ' + name + '</h3>';
    //Elimino los elementos que ya no quiero mostrar
    document.getElementById("name").outerHTML = "";
    document.getElementById("ingresar").outerHTML = "";
    //Creo un nuevo botón para ir a la siguiente pantalla, primero seleccionando a qué etiqueta se agregará y después creando el elemento
    const addButton = document.querySelector('h3')
    const button = document.createElement('button');
    button.type = 'button';
    //Determino el texto interior del botón
    button.innerText = 'Continue';
    //Aplico atributos como clase y onclick
    button.setAttribute('class', 'button');
    button.setAttribute('onclick', 'location.href="categorias.html"');
    //Agrego el elemento a mi div vacío en HTML
    addButton.appendChild(button);
    return false;
  }
});