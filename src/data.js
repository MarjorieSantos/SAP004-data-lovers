// utilizei o filter pois ele retorna todos os elementos do array


export const filterPokemon = (listPokemon, pokemonInfo) => {
  const newListPokemon = listPokemon.filter(function (pokemon) {
    debugger
    return pokemon.name === pokemonInfo;
  })
  return newListPokemon;
};

console.log()

//então quando chamar o filterPokemon no main.js, ele vai renderizar TODAS as informações
//mas como deixei aparecer só 4 delas, irei selecionar qual irá aparecer



// export const anotherExample = () => {
//   return 'OMG';
// };
 

