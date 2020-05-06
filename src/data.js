export const filterByName = (pokemons, searchedName) => {
  if (!Array.isArray(pokemons) || typeof searchedName !== "string") {
    throw new TypeError()
  }
  return pokemons.filter((pokemon) => {
    return pokemon.name.toUpperCase().indexOf(searchedName.toUpperCase()) === 0
  })
}

export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === "A-Z") {
    data.sort(function (a, b) {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      return 0
    })
  } else if (sortOrder === "Z-A") {
    data.sort(function (a, b) {
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      return 0
    })
  } else if (sortOrder === "crescentOrder") {
    data.sort(function (a, b) {
      if (a[sortBy] > b[sortBy]) {
        return 1
      }
      if (a[sortBy] < b[sortBy]) {
        return -1
      }
      return 0
    })
  } else if (sortOrder === "decreasingOrder") {
    data.sort(function (a, b) {
      if (a[sortBy] < b[sortBy]) {
        return 1
      }
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      return 0
    })
  }
  return data
};

export const computeStats = (pokemons, singleWeightPokemon) => {
  const calcWeight = pokemons.reduce((accumulator, pokemon) => {
    if(+singleWeightPokemon.weight.replace(" kg", "") > +pokemon.weight.replace(" kg", "")){
      return accumulator +1
    } else {
      return accumulator
    }
  }, 0)
  return ((calcWeight / pokemons.length) * 100).toFixed(1)
}