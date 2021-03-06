import { filterByName, sortBy, filterByType, getWeitghtPercentage } from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon
let showFilterPokemons = data.pokemon
const searchInput = document.querySelector("#search-input")
const pokemonList = document.querySelector("#pokemon-list")
const clearBtn = document.querySelector("#clear-btn")
const noResultFound = document.querySelector("#no-results-found")
const popUp = document.querySelector("#pop-up-div")
const filter = document.querySelector("#filter-for");
const selectByTypeInput = document.querySelector("#filter-by-type")
const closeBtn = document.querySelector("#close")
const overlay = document.querySelector(".overlay")

const renderPokemon = (pokemon) => {
  const template = document.querySelector("#pokemon-template")
  const card = template.content.querySelector(".card")
  const pokemonName = card.querySelector(".name")
  const pokemonImage = card.querySelector(".img")
  const pokemonNumber = card.querySelector(".num")
  const pokemonType = card.querySelector(".type")
  pokemonName.textContent = pokemon.name
  pokemonImage.setAttribute("src", pokemon.img)
  pokemonNumber.textContent = pokemon.num
  pokemonType.textContent = pokemon.type.toString().replace(",", ", ")
  const clonedTemplate = document.importNode(template.content, true)
  clonedTemplate.firstElementChild.addEventListener('click', () => openPopup(pokemon))
  pokemonList.appendChild(clonedTemplate)
}

const clearPokemonList = () => {
  pokemonList.innerHTML = ""
}

const searchByName = () => {
  const searchTerm = searchInput.value
  const result = filterByName(pokemons, searchTerm)
  clearPokemonList()
  noResultFound.style.display = result.length < 1 ? "block" : "none"
  result.forEach(renderPokemon)
}

const renderAllPokemons = (pokemons) => {
  clearPokemonList()
  pokemons.forEach(renderPokemon)
}
renderAllPokemons(pokemons)

const resetOrder = () => {
  filter.value = "crescentOrder"
  selectByTypeInput.value = ""
  showFilterPokemons = pokemons
  renderAllPokemons(pokemons)
}

searchInput.addEventListener("keyup", searchByName)
clearBtn.addEventListener("click", resetOrder)


const filterFor = () => {
  showFilterPokemons = sortBy(showFilterPokemons, filter.value === "A-Z" || filter.value === "Z-A" ? "name" : "num", filter.value)
  const arrayOrder = showFilterPokemons
  renderAllPokemons(arrayOrder)
}

filter.addEventListener("change", filterFor)

const searchByType = () => {
  const searchType = selectByTypeInput.value
  const searchResult = filterByType(pokemons, searchType)
  showFilterPokemons = searchResult
  clearPokemonList()
  searchResult.forEach(renderPokemon)
  if (filterFor === filter.value === "A-Z" || filter.value === "Z-A" ? "name" : "num", filter.value) {
    searchResult.forEach(filterFor)
  }
}

selectByTypeInput.addEventListener("change", searchByType)

const openPopup = (pokemon) => {
  const name = popUp.querySelector(".name")
  const img = popUp.querySelector(".img")
  const num = popUp.querySelector(".num")
  const type = popUp.querySelector(".type")
  const height = popUp.querySelector(".height")
  const weight = popUp.querySelector(".weight")
  const candy = popUp.querySelector(".candy")
  const nextEvolution = popUp.querySelector(".next_evolution")
  const weightPercentage = popUp.querySelector(".weightPercentage")

  name.textContent = pokemon.name
  img.setAttribute("src", pokemon.img)
  num.textContent = pokemon.num
  type.textContent = `Pokémon tipo: ${pokemon.type.join(", ")}`
  height.textContent = `Altura: ${pokemon.height}`
  weight.textContent = `Peso: ${pokemon.weight}`
  candy.textContent = `Candy: ${pokemon.candy}`
  nextEvolution.textContent = `Proxima evolução: ${pokemon.next_evolution ? pokemon.next_evolution.map(evolution => evolution.name).join(", ") : "não há"}`
  weightPercentage.textContent = `${pokemon.name} é ${getWeitghtPercentage(pokemons, pokemon)}% mais pesado que os outros pokemons!`
  popUp.classList.add("v-visible")
  popUp.classList.remove("v-hidden")
  overlay.classList.add("d-block")
  overlay.classList.remove("d-none")
  popUp.classList.remove("opacity-zero")
  popUp.classList.add("opacity-one")
}

const closePopup = () => {
  popUp.classList.add("v-hidden")
  popUp.classList.remove("v-visible")
  popUp.classList.add("opacity-zero")
  popUp.classList.remove("opacity-one")
  overlay.classList.add("d-none")
  overlay.classList.remove("d-block")
}

closeBtn.addEventListener("click", closePopup)
overlay.addEventListener("click", closePopup)
