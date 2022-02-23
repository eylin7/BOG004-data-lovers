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
 
/*export const promedioDepokemones= (arregloDeData) => {
   return arregloDeData.forEach(element => { element.stats["base-attack","base-defense","base-stamina"]
   //console.log(element.stats["base-attack","base-defense","base-stamina"])
   let value = ["base-attack","base-defense","base-stamina"]
   let suma = value.reduce((acumulador, valor )=>  acumulador + valor)
   let total = suma / value.length
   //console.log(total)
  });*/

 //}


 





