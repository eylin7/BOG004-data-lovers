import { filtrarTipos, ordenarPokemones } from '../src/data.js';

const pokemonTest = [
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
    {
      "name": "zubat",
      "type": [
      "dragon",
      "water"
      ],
    },
]
describe(filtrarTipos, () => {
 // it('is a function', () => {
   // expect(typeof example).toBe('function');
 // });

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
  });
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
