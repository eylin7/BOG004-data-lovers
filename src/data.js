export const filtrarTipos = (arregloDeData, seleccionado) => {
  let arrayFiltrado = arregloDeData.filter((pokemon) =>
    pokemon.type.includes(seleccionado)
  );
  return arrayFiltrado;
};
//FUNCION ORDENAR POKEMONES POR NOMBRE DE LA "Z" A LA "A"
export const ordenarPokemones = (arregloDeData) =>  arregloDeData.sort((elemento1, elemento2) => {
  return (elemento1.name > elemento2.name) ? -1 : 1
})
 
export const promedioDepokemones= (arregloDeData) => {
  let values = []
  arregloDeData.forEach(element => { values.push(element.stats["base-attack"])});
  let suma = values.reduce((acumulador, valor )=>  parseInt(acumulador)+ parseInt(valor) )
  let promedio = suma / values.length
   return promedio
   
 }