export const filtrarTipos = (arregloDeData, seleccionado) => {
  let arrayFiltrado = arregloDeData.filter((pokemon) =>
    pokemon.type.includes(seleccionado)
  );
  return arrayFiltrado;
};
//FUNCION ORDENAR POKEMONES POR NOMBRE DE LA "Z" A LA "A"
export const ordenarPokemones = (arregloDeData) =>  arregloDeData.sort((item1, item2) => {
  return (item1.name > item2.name) ? -1 : 1
})
 


 





