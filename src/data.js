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

//  export const computeStats = (pokemons) => {
//   pokemons.reduce((valorAcumulator, newArray) => {
//     const calcWeight = newArray.pokemon.weight >= 4 ? "bigger" : "smaller";
//     valorAcumulator[calcWeight].push(newArray);
//     return valorAcumulator;
//    }, 0)}



// export const computeStats = (pokemons) => {
//   const total = pokemons.reduce((total, newArray) => {
//     return total += Number(newArray.weight.replace(" kg", ""))
//   }, 0)
//   return total/pokemons.length
// }


