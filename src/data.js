export const filtrarTipos = (arregloDeData, seleccionado) => {
  let arrayFiltrado = arregloDeData.filter((pokemon) =>
    pokemon.type.includes(seleccionado)
  );
  return arrayFiltrado;
};

export const ordenarPokemonZA =(poke)=>{
  let ordenar= poke.sort((a= pokemon.name, b=pokemon.name)=>{
if (b.name == a.name){
  return 0;
} 
if (b.name < a.name){
  return -1
}
return 1
});
return ordenar;
};
console.log(ordenarPokemonZA)

export const ordenarPokemonAZ=(poke)=>{
  let ordenar= poke.sort((a= pokemon.name, b=pokemon.name)=>{
if (a.name == b.name){
  return 0;
} 
if (a.name < b.name){
  return -1
}
return 1
});
return ordenar;
};
console.log(ordenarPokemonAZ)