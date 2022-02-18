import { mostrarDatos } from './data.js';

//console.log(example, data);
let pagina1= document.getElementById("boton1");
pagina1.addEventListener("click", mostrar);
function mostrar() {
  document.getElementById("ocultar").style.display = "flex";
   document.getElementById("imagen1").style.display = "none";
  
   
}

mostrarDatos()
  
