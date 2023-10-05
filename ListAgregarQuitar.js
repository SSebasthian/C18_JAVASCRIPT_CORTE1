
// LISTADO

const input = document.querySelector("input");
const AñadirButon = document.querySelector(".BotonAgregar");
const ul = document.querySelector("ul");

AñadirButon.addEventListener("click", (evento) => {
    evento.preventDefault(); //Evita que la pagina se recargue

  const text = input.value; //Guarda valor ingresado

  if (text !== "") {
    const li = document.createElement("li");
    const Parrafo = document.createElement("Parrafo");
    Parrafo.textContent = text;

    li.appendChild(Parrafo);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
  }
});


// BOTON ELIMINAR

function addDeleteBtn() {
  const BotonEliminar = document.createElement("button");

  BotonEliminar.textContent = "X";
  BotonEliminar.className = "BotonEliminar";

  BotonEliminar.addEventListener("click", (evento) =>{
    const item = evento.target.parentElement;
    ul.removeChild(item);
  });
  return BotonEliminar;
}