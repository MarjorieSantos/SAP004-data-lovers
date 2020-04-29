export const filterByName = (pokemons, searchedName) => {
  if (Array.isArray(pokemons) === false || typeof searchedName !== "string") {
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