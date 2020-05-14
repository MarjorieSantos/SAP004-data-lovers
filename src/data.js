// utilizei o filter pois ele retorna todos os elementos do array

export const filterData = (listPokemon, pokemonInfo) => {
  const newListPokemon = listPokemon.filter(function (pokemon) {
    return pokemon.name === pokemonInfo;
  })
  return newListPokemon;
};


export const sortData = (data, infoBy, infoOrder) => {
  if (infoOrder === "A-Z") {
    data.sort(function (a, b) {
      if (a[infoBy] > b[infoBy]) {
        return 1;
      }
      if (a[infoBy] < b[infoBy]) {
        return -1;
      }
      return 0;
    })
  } else if (infoOrder === "Z-A") {
    data.sort(function (a, b) {
      if (a[infoBy] < b[infoBy]) {
        return 1;
      }
      if (a[infoBy] > b[infoBy]) {
        return -1;
      }
      return 0;
    })
  } else if (infoOrder === "ascNum") {
    data.sort(function (a, b) {
      if (a[infoBy] > b[infoBy]) {
        return 1
      }
      if (a[infoBy] < b[infoBy]) {
        return -1
      }
      return 0;
    })
  } else if (infoOrder === "descNum") {
    data.sort(function (a, b) {
      if (a[infoBy] < b[infoBy]) {
        return 1;
      }
      if (a[infoBy] > b[infoBy]) {
        return -1;
      }
      return 0;
    })
  }
  return data;
};



export const computeStats = (pokemons) => {
  const total = pokemons.reduce((valueAccumulator, lonelyPokemon) => {
    return valueAccumulator += Number(lonelyPokemon.weight.replace(" kg", ""))
  }, 0)
  return (total/pokemons.length).toFixed(1)
}