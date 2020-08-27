export const filterByName = (pokemons, searchedName) => {
  if (!Array.isArray(pokemons) || typeof searchedName !== "string") {
    throw new TypeError()
  }
  return pokemons.filter((pokemon) => {
    return pokemon.name.toUpperCase().indexOf(searchedName.toUpperCase()) === 0
  })
}

export const filterByType = (pokemons, searchdType) => {
  if (!Array.isArray(pokemons) || typeof searchdType !== "string") {
    throw new TypeError()
  }
  return pokemons.filter((pokemon) => {
    return pokemon.type.indexOf(searchdType) > -1
  })
}

export const sortBy = (pokemons, sortBy, sortOrder) => {
  if (!Array.isArray(pokemons) ||
    (sortBy !== "name" && sortBy !== "num") ||
    (sortOrder !== "A-Z" && sortOrder !== "Z-A" && sortOrder !== "crescentOrder" && sortOrder !== "decreasingOrder")) {
    throw new TypeError()
  }

  const data = [...pokemons]

  if (sortOrder === "A-Z" || sortOrder === "crescentOrder") {
    data.sort(function (a, b) {
      return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0;
    })
  } else {
    data.sort(function (a, b) {
      return a[sortBy] < b[sortBy] ? 1 : a[sortBy] > b[sortBy] ? -1 : 0;
    })
  }
  return data
};

export const getWeitghtPercentage = (pokemons, singleWeightPokemon) => {
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
