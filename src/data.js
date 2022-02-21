export const filtrarTipos = (arregloDeData, seleccionado) => {
  let arrayFiltrado = arregloDeData.filter((pokemon) =>
    pokemon.type.includes(seleccionado)
  );
  return arrayFiltrado;
};
//FUNCION ORDENAR POKEMONES POR NOMBRE DE LA "Z" A LA "A"
export const ordenarPokemonZA = (poke) => {
  let ordenar = poke.sort((a = pokemon.name, b = pokemon.name) => {
    if (b.name == a.name) {
      return 0;
    }
    if (b.name < a.name) {
      return -1;
    }
    return 1;
  });
  return ordenar;
};

//FUNCION ORDENAR POKEMONES POR NOMBRE DE LA "A" A LA "Z"
export const ordenarPokemonAZ = (poke) => {
  let ordenar = poke.sort((a = pokemon.name, b = pokemon.name) => {
    if (a.name == b.name) {
      return 0;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 1;
  });
  return ordenar;
};

/*export const estadisticas = (ataqueDePokemones,pokemones) => {
  for(let i=0;i<ataqueDePokemones.length;i++){
    if(ataqueDePokemones.spawn-chance >= "0,050"){
  return false
    }
  else{
    return true
  }
  }  
  };*/
