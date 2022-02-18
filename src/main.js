import data from "./data/pokemon/pokemon.js";
import { filtrarTipos} from "./data.js";
import { ordenarPokemonZA} from "./data.js";
import { ordenarPokemonAZ} from "./data.js";

let pokemones = data.pokemon;
console.log(pokemones);
//console.log(example, data);
let pagina1 = document.getElementById("boton1");
pagina1.addEventListener("change", mostrar);
//Esta funcion oculta pantalla principal y muestra lista de pokemones
function mostrar() {
  document.getElementById("ocultar").style.display = "flex";
  document.getElementById("imagen1").style.display = "none";
  document.getElementById("segundaPantalla").style.display="none"
}


const mostrarDatos= (descripcion)=>{ 
  let traertarjetas = document.getElementById("pokemones");
    traertarjetas.innerHTML = "";  
  descripcion.forEach(function(pokemon, indice){
    let tarjeta2 = document.createElement("div");
    tarjeta2.setAttribute("class", "cuerpo-tarjetas");
    if(descripcion == pokemones){
      tarjeta2.innerHTML=`
      <img class="img" src=${pokemon.img}>
      <h3>${pokemon.name}</h3>
      `
    }else{

      tarjeta2.innerHTML=`
    <img class="img" src=${pokemon.img}>
    <h3>${pokemon.name}</h3>
    <p>${pokemon.about}</p>
    `
    }
    
    traertarjetas.appendChild(tarjeta2)
  
  })
 
};



let traerTipos= document.getElementById("tipos");
traerTipos.addEventListener("change",()=> mostrarDatos(filtrarTipos(pokemones, traerTipos.value)));

//let btnTodosLosPokemones= document.getElementById("boton1");
//btnTodosLosPokemones.addEventListener("click",()=> mostrarDatos(pokemones));


let btnTodosLosPokemones= document.getElementById("boton1");
btnTodosLosPokemones.addEventListener("change",()=> mostrarDatos(ordenarPokemonAZ(pokemones,btnTodosLosPokemones.value)));







//let btnTodosLosPokeza= document.querySelector("btn1");
//btnTodosLosPokeza.addEventListener("change",()=> mostrarDatos(ordenarPokemonZA(pokemones,btnTodosLosPokeza.value, )));


//let btnTodosLosPokemones= document.getElementById("boton1");
//btnTodosLosPokemones.addEventListener("click",()=> mostrarDatos(ordenarPokemonZA(pokemones)))
