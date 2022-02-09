
import data from './data/pokemon/pokemon.js';

export const mostrarDatos = () => {
  let pokemones = data.pokemon
console.log(pokemones)
 pokemones.forEach (function(pokemon, indice) {
    //console.log(pokemon, indice);
    const nombre = pokemon.name;
    console.log(nombre)
    const contenedor = document.getElementById("contenedor");
    const p = document.createElement("p")
    p.innerText= nombre
    contenedor.appendChild(p)
  })
  //return 'example';
};

//export const anotherExample = () => {
  //return 'OMG';


