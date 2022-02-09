import { mostrarDatos } from './data.js';
import data from './data/pokemon/pokemon.js';

//console.log(example, data);
let pagina1= document.getElementById("boton1");
pagina1.addEventListener("click", mostrar);
function mostrar() {
  document.getElementById("bienvenida").style.display = "none";
   document.getElementById("contenedor").style.display = "block";
   document.getElementById("contenedor1").style.display = "none";
   document.getElementById("imagen1").style.display = "none";
   
}

mostrarDatos()
  
