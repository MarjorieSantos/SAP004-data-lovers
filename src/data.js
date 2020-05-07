export const filterByName = (pokemons, searchedName) => {
  if (!Array.isArray(pokemons) || typeof searchedName !== "string") {
    throw new TypeError()
  }
  return pokemons.filter((pokemon) => {
    return pokemon.name.toUpperCase().indexOf(searchedName.toUpperCase()) === 0
  })
}

export const sortData = (data, sortBy, sortOrder) => {
  if (typeof sortOrder !== "string" && typeof data !== "string") {
    throw new TypeError()
  }
  if (sortOrder === "A-Z" || sortOrder === "crescentOrder") {
    data.sort(function (a, b) {
      return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0;
    })
  } else if (sortOrder === "Z-A" || sortOrder === "decreasingOrder") {
    data.sort(function (a, b) {
      return a[sortBy] < b[sortBy] ? 1 : a[sortBy] > b[sortBy] ? -1 : 0;
    })
  }
  return data
};

export const computeStats = (pokemons, singleWeightPokemon) => {
  if (!Array.isArray(pokemons) || typeof singleWeightPokemon !== "object") {
    throw new TypeError()
  }
  const calcWeight = pokemons.reduce((accumulator, pokemon) => {
    if (+singleWeightPokemon.weight.replace(" kg", "") > +pokemon.weight.replace(" kg", "")) {
      return accumulator + 1
    } else {
      return accumulator
    }
  }, 0)
  return ((calcWeight / pokemons.length) * 100).toFixed(1)
}