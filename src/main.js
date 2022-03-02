import data from "./data/pokemon/pokemon.js";
import {
  filtrarTipos,
  ordenarPokemones,
  promedioDepokemones,
  promedioDefensa,
} from "./data.js";
//RECIBIR LA DATA
let pokemones = data.pokemon;
//REALIZA LOS EVENTOS PARA MOSTRAR Y OCULTAR PANTALLAS
let pagina1 = document.getElementById("boton1");
pagina1.addEventListener("change", mostrar);
//FUNCION PARA OCULTAR Y MOSTRAR PANTALLAS
function mostrar() {
  document.getElementById("ocultar").style.display = "flex";
  document.getElementById("valor").style.display = "none";
  document.getElementById("interfazDeBienvenida").style.display = "none";

}


//FUNCION PARA CREAR Y MOSTRAR TARJETAS POKEMON
const mostrarDatos = (pokemonesArreglo) => {
  let traertarjeta = document.getElementById("pokemones");
  traertarjeta.innerHTML = "";
  pokemonesArreglo.forEach(function (pokemon) {
    let tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "cuerpo-tarjetas");
    if (pokemonesArreglo == pokemones) {
      tarjeta.innerHTML = `
      <img class="img" src=${pokemon.img}>
      <div class="datos-pokemon">
        <h2>${pokemon.name}</h2>
        <p>${pokemon.num}</p>
        <p>${pokemon.type}</p>
      </div>
      `;
    } else {
      tarjeta.innerHTML = `
    <img class="img" src=${pokemon.img}>
    <div class="tipos-pokemon">
    <h2>${pokemon.name}</h2>
    <h3>${pokemon.generation.num}</h3>
    <p>${pokemon.about}</p>
    </div>
    `;
    }
    traertarjeta.appendChild(tarjeta);
  });
};

//EVENTOS PARA EJECUTAR LAS FUNCIONES MOSTRARDATOS Y LAS DE DATA.JS
let traerTipos = document.getElementById("tipos");
traerTipos.addEventListener("change", () =>
  mostrarDatos(filtrarTipos(pokemones, traerTipos.value))
);
const pokemonesOrdenados = document.getElementById("boton1");
pokemonesOrdenados.addEventListener("change", () => {
  let orden = ordenarPokemones(pokemones, ordenarPokemones.value);
  if (pokemonesOrdenados.value === "za") {
    mostrarDatos(orden);
  } else if (pokemonesOrdenados.value === "az") {
    mostrarDatos(orden.reverse());
  }
});
let promedioDepoke = document.getElementById("promedio");
promedioDepoke.addEventListener("click", () => {
  document.getElementById("valor").innerHTML = promedioDepokemones(pokemones);
});
let promedioDepokemon = document.getElementById("promedioDefensa");
promedioDepokemon.addEventListener("click", () => {
  document.getElementById("valorDefensa").innerHTML =
    promedioDefensa(pokemones);
});
