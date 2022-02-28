import {
  filtrarTipos,
  ordenarPokemones,
  promedioDepokemones,
  promedioDefensa,
} from "../src/data.js";

const pokemonTest = [
  {
    name: "abra",
    type: ["grass", "poison"],
  },
  {
    name: "zubat",
    type: ["dragon", "water"],
  },
  {
    name: "togepi",
    type: ["grass", "ice"],
  },
];
describe(filtrarTipos, () => {
  it("filtrar Tipos", () => {
    expect(typeof filtrarTipos).toBe("function");
  });

  it("filtro `grass`", () => {
    const resultadoPokemon = [
      {
        name: "abra",
        type: ["grass", "poison"],
      },
      {
        name: "togepi",
        type: ["grass", "ice"],
      },
    ];
    expect(filtrarTipos(pokemonTest, "grass")).toEqual(resultadoPokemon);
  });
});

describe("ordenar Pokemones", () => {
  it("ordenarPokemones", () => {
    expect(typeof ordenarPokemones).toBe("function");
  });

  it("ordenar de la z a", () => {
    const ordenarZa = ordenarPokemones(pokemonTest);
    expect(ordenarZa[0].name).toEqual("zubat");
  });
});

describe(promedioDepokemones, () => {
  it("return  `nos da el promedio de ataque`", () => {
    const promedioTest = [
      {
        stats: {
          "base-attack": "154.72",
          "base-defense": "149",
        },
      },
    ];
    expect(promedioDepokemones(promedioTest, "base-attack")).toEqual(154.72);
  });
});

describe(promedioDefensa, () => {
  it("return  `nos da el promedio de defensa`", () => {
    const promedioTest = [
      {
        stats: {
          "base-attack": "154.72",
          "base-defense": "140.21",
        },
      },
    ];
    expect(promedioDefensa(promedioTest, "base-defense")).toEqual(140.21);
  });
});
