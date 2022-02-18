
import data from './data/pokemon/pokemon.js';

export const mostrarDatos = () => {
  let pokemones = data.pokemon
console.log(pokemones)
 pokemones.forEach (function(pokemon, indice) {
    //console.log(pokemon, indice);
    const nombre = pokemon.name;
    const numeros = pokemon.num;
    let tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "cuerpo tarjeta");

    let imagenes = document.createElement("img");
    imagenes.setAttribute("src", pokemon.img)
    tarjeta.appendChild(imagenes)
    let traertarjetas = document.getElementById("pokemones");
    traertarjetas.appendChild(tarjeta);
    const p = document.createElement("p")
    p.innerText = nombre + " " + numeros;
    tarjeta.appendChild(p);
    
  });
  
};







  