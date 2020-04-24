export const filterByName = (pokemons,searchedName) =>{
  if (Array.isArray(pokemons) === false || typeof searchedName!== "string") {
    throw new TypeError()
  }
  return pokemons.filter((pokemon) => {
    return pokemon.name.toUpperCase().indexOf(searchedName.toUpperCase()) === 0
  })
}
