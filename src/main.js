import data from "./data/pokemon/pokemon.js";
import { filtrarTipos} from "./data.js";
import { ordenarPokemonZA} from "./data.js";
import { ordenarPokemonAZ} from "./data.js";

let pokemones = data.pokemon;
console.log(pokemones);
//console.log(example, data);
let pagina1 = document.getElementById("boton1");
pagina1.addEventListener("click", mostrar);
//Esta funcion oculta pantalla principal y muestra lista de pokemones
function mostrar() {
  document.getElementById("ocultar").style.display = "flex";
  document.getElementById("imagen1").style.display = "none";
  document.getElementById("segundaPantalla").style.display="none"
}


//Esta funcion muestra todos los pokemones en pantalla
/*const mostrarDatos = (mostrarPokemones) => {
  console.log(mostrarPokemones);
  let traertarjetas = document.getElementById("pokemones");
  traertarjetas.innerHTML = "";//para que se limpie la pantalla cuando carga
  mostrarPokemones.forEach(function (pokemon, indice) {
    //console.log(pokemon, indice);
    const nombre = pokemon.name;
    const numeros = pokemon.num;
    let tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "cuerpo-tarjetas");
    //Este nodo es para insertar la imagen del pokemon
    let imagenes = document.createElement("img");
    imagenes.setAttribute("src", pokemon.img);
    tarjeta.appendChild(imagenes);
    let traertarjetas = document.getElementById("pokemones");
    traertarjetas.appendChild(tarjeta);
    const p = document.createElement("p");
    p.innerText = nombre + " " + numeros;
    tarjeta.appendChild(p);
 
  });
};*/

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
btnTodosLosPokemones.addEventListener("click",()=> mostrarDatos(ordenarPokemonZA(pokemones)));
