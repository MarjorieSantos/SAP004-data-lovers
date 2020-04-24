import {
  filterByName
} from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon

const searchInput = document.getElementById("search-input")
const pokemonList = document.getElementById("pokemon-list")
const clearBtn = document.getElementById("clear-btn")
const noResultFound = document.getElementById("no-result-found")


const renderPokemon = (pokemon) => {
  const template = document.getElementById("pokemon-template")
  const card = template.content.querySelector(".card")
  const pokemonName = card.querySelector(".name")
  const pokemonImage = card.querySelector(".img")
  const pokemonNumber = card.querySelector(".num")
  const pokemonType = card.querySelector(".type")
  pokemonName.textContent = pokemon.name
  pokemonImage.setAttribute("src", pokemon.img)
  pokemonNumber.textContent = pokemon.num
  pokemonType.textContent = pokemon.type
  const templateDoned = document.importNode(template.content, true)
  pokemonList.appendChild(templateDoned)
}
const searchByName = () => {
  const searchTerm = searchInput.value
  const result = filterByName(pokemons, searchTerm)
  clearPokemonList()
  result.forEach(renderPokemon)
}

const renderAllPokemons = () => {
  pokemons.forEach(renderPokemon)
}
renderAllPokemons()


const clearPokemonList = () => {
  pokemonList.innerHTML = ""
}


searchInput.addEventListener("keyup", searchByName)
clearBtn.addEventListener("click", clearPokemonList)
