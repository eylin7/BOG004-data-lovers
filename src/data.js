export const filtrarTipos = (arregloDeData, seleccionado) => {
  let arrayFiltrado = arregloDeData.filter((pokemon) =>
    pokemon.type.includes(seleccionado)
  );
  return arrayFiltrado;
};
//FUNCION ORDENAR POKEMONES POR NOMBRE DE LA "Z" A LA "A"
export const ordenarPokemones = (arregloDeData) =>
  arregloDeData.sort((elemento1, elemento2) => {
    return elemento1.name > elemento2.name ? -1 : 1;
  });
//FUNCION PARA CALCULAR PROMEDIO
export const promedioDepokemones = (arregloDeData) => {
  let values = [];
  arregloDeData.forEach((element) => {
    values.push(element.stats["base-attack"]);
  });
  let suma = values.reduce(
    (acumulador, valor) => parseInt(acumulador) + parseInt(valor)
  );
  let promedio = suma / values.length;
  let promedioRedondeado = Math.round(promedio * 100) / 100;
  return promedioRedondeado;
};

export const promedioDefensa = (arregloDeData) => {
  let valuesDefensa = [];
  arregloDeData.forEach((element) => {
    valuesDefensa.push(element.stats["base-defense"]);
  });
  let sumaDefensa = valuesDefensa.reduce(
    (acumulador, valor) => parseInt(acumulador) + parseInt(valor)
  );
  let promedioDefensa = sumaDefensa / valuesDefensa.length;
  let promedioRedondeadoDefensa = Math.round(promedioDefensa * 100) / 100;
  return promedioRedondeadoDefensa;
};
