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
 
//FUNCION PARA ESTADISTICA 


export const promedioDepokemones= function calcularPromedio(){
 const promedio = (data) => {
  let calculador= data.filter((elemento) => {
    return elemento.stats.includes("base-attack");
  });
  return calculador;
};

  let calcular= promedio.reduce(function (acumulador,siguienteValor){
    return acumulador + siguienteValor
  });
  let promedioDepokemones= calcular / arrayPoke.lengh;
  return promedioDepokemones; 
}



 





