import { filtrarTipos, ordenarPokemones,promedioDepokemones } from '../src/data.js';

const pokemonTest = [
    { 
      "name": "abra", 
      "type":[
      "grass",
      "poison"
      ],
    },
    {
      "name": "zubat",
      "type": [
      "dragon",
      "water"
      ],
    },
    {
      "name": "togepi",
      "type": [
        "grass",
        "ice"
      ],  
    },
    
    
]
describe(filtrarTipos, () => {
  it('filtro `grass`', () => { 
    const resultadoPokemon = [
      { 
        "name": "abra", 
        "type":[
        "grass",
        "poison"
        ],
      },
      {
        "name": "togepi",
        "type": [
          "grass",
          "ice"
        ],  
      },
    
  ]
    expect(filtrarTipos(pokemonTest, "grass")).toEqual(resultadoPokemon);
  })
});


describe("ordenar Pokemones", () => {
 // it('is a function', () => {
  //  expect(typeof anotherExample).toBe('function');
  //});

  it('ordenar de la z a', () => {
   const ordenarZa = ordenarPokemones(pokemonTest)
    expect(ordenarZa[0].name).toEqual('zubat'); 
  });
});
 
describe(promedioDepokemones, () => {
  it('return  `nos da el promedio de ataque`', () => {
    const promedioTest = [
      { 
        "stats": {
          "base-attack": "154.72111553784862",
          "base-defense": "149",
          
        },
          
        
      }
    
  ]
  expect(promedioDepokemones(promedioTest, "base-attack")).toEqual(154.72111553784862);

})
})
  

