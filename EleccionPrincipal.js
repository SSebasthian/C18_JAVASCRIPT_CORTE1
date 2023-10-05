// ELECCION MOSTRAR PRINCIPAL

function mostrarUno(){
    document.getElementById('contenido-uno').style.display='block';
    document.getElementById('BotonMostrarUno').style.display='none';
    document.getElementById('BotonMostrarDos').style.display='none';
}
function mostrarDos(){
  document.getElementById('contenido-dos').style.display='block';
  document.getElementById('BotonMostrarUno').style.display='none';
  document.getElementById('BotonMostrarDos').style.display='none';
  document.getElementById('YoInicio').style.display='none';
}

// ELECCION OCULTAR PORTAFOLIO


function OcultarUno(){
    document.getElementById('contenido-uno').style.display='none';
    document.getElementById('BotonMostrarUno').style.display='block';
    document.getElementById('BotonMostrarDos').style.display='block';
}
function OcultarDos(){
  document.getElementById('contenido-dos').style.display='none';
  document.getElementById('BotonMostrarUno').style.display='block';
  document.getElementById('BotonMostrarDos').style.display='block';
  document.getElementById('YoInicio').style.display='block';
}
