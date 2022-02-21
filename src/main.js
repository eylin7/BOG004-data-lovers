import data from "./data/pokemon/pokemon.js";
import { filtrarTipos } from "./data.js";
import { ordenarPokemones } from "./data.js";


let pokemones = data.pokemon;
console.log(pokemones);

let pagina1 = document.getElementById("boton1");
pagina1.addEventListener("change", mostrar);
//Esta funcion oculta pantalla principal y muestra lista de pokemones
function mostrar() {
  document.getElementById("ocultar").style.display = "flex";
  document.getElementById("imagen1").style.display = "none";
  document.getElementById("informacion").style.display = "none";
  document.getElementById("segundaPantalla").style.display = "none";
}
//Funcion contine tarjetas de los pokemones
const mostrarDatos = (descripcion) => {
  let traertarjetas = document.getElementById("pokemones");
  traertarjetas.innerHTML = "";
  descripcion.forEach(function (pokemon, indice) {
    let tarjeta2 = document.createElement("div");
    tarjeta2.setAttribute("class", "cuerpo-tarjetas");
    if (descripcion == pokemones) {
      tarjeta2.innerHTML = `
      <img class="img" src=${pokemon.img}>
      <div class="datosPokemon">
        <h4>${pokemon.name}</h4>
        <h4>${pokemon.num}</h4>
        <h5>${pokemon.type}</h5>
        
        
      </div>
      `;
    } else {
      tarjeta2.innerHTML = `
    <img class="img" src=${pokemon.img}>
    <div class="tiposPokemon">
    <h3>${pokemon.name}</h3>
    <h6>${pokemon.generation.num}</h6>
    <div class="descripcion">
    <h5>${pokemon.about}</h5>
    </div>
    </div>
    `;
    }

    traertarjetas.appendChild(tarjeta2);
  });
};

//Llamando a las funciones

let traerTipos = document.getElementById("tipos");
traerTipos.addEventListener("change", () =>
  mostrarDatos(filtrarTipos(pokemones, traerTipos.value))
);
console.log(filtrarTipos(pokemones, traerTipos.value));

const pokemonesOrdenados = document.getElementById("boton1")
pokemonesOrdenados.addEventListener("change", () => {
  let orden = ordenarPokemones(pokemones, ordenarPokemones.value)
  if(pokemonesOrdenados.value === "za"){ (mostrarDatos(orden));
  }else if (pokemonesOrdenados.value  === "az") 
  { (mostrarDatos(orden.reverse()))
    
  
  }

  

})













