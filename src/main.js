import {
  filterByName,
  sortData
} from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon
const searchInput = document.getElementById("search-input")
const pokemonList = document.getElementById("pokemon-list")
const clearBtn = document.getElementById("clear-btn")
const noResultFound = document.getElementById("no-results-found")
const popUp = document.getElementById("pop-up-div")
const filter = document.querySelector("#filter-for");
const closeBtn = document.getElementById("close")
const overlay = document.querySelector(".overlay")


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
  pokemonType.textContent = pokemon.type.toString().replace(",", ", ")
  const clonadeTemplate = document.importNode(template.content, true)
  clonadeTemplate.firstElementChild.addEventListener('click', () => openPopup(pokemon))
  pokemonList.appendChild(clonadeTemplate)
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

const renderAllPokemons = () => {
  clearPokemonList()
  pokemons.forEach(renderPokemon)
}
renderAllPokemons()

const resetOrder = () =>{ filter.value = "crescentOrder"
filterFor()
}

searchInput.addEventListener("keyup", searchByName)
clearBtn.addEventListener("click", resetOrder)


const filterFor = () => {
  if (filter.value === "A-Z") {
    const arrayOrder = sortData(pokemons, "name", "A-Z")
    renderAllPokemons(arrayOrder)
  } else if (filter.value === "Z-A") {
    const arrayOrder = sortData(pokemons, "name", "Z-A")
    renderAllPokemons(arrayOrder)
  } else if (filter.value === "crescentOrder") {
    const arrayOrder = sortData(pokemons, "num", "crescentOrder")
    renderAllPokemons(arrayOrder)
  } else if (filter.value === "decreasingOrder") {
    const arrayOrder = sortData(pokemons, "num", "decreasingOrder")
    renderAllPokemons(arrayOrder)
  }
}

filter.addEventListener("change", filterFor)


const openPopup = (pokemon) => {
  const name = popUp.querySelector(".name")
  const img = popUp.querySelector(".img")
  const num = popUp.querySelector(".num")
  const type = popUp.querySelector(".type")
  const height = popUp.querySelector(".height")
  const weight = popUp.querySelector(".weight")
  const candy = popUp.querySelector(".candy")
  const nextEvolution = popUp.querySelector(".next_evolution")

  name.textContent = pokemon.name
  img.setAttribute("src", pokemon.img)
  num.textContent = pokemon.num
  type.textContent = `Pokémon tipo: ${pokemon.type.join(", ")}`
  height.textContent = `Altura: ${pokemon.height}`
  weight.textContent = `Peso: ${pokemon.weight}`
  candy.textContent = `Candy: ${pokemon.candy}`
  nextEvolution.textContent = `Proxima evolução: ${pokemon.next_evolution ? pokemon.next_evolution.map(evolution => evolution.name).join(", "): "não há"}`
  popUp.style.visibility = "visible"
  overlay.style.display = "block"
  popUp.style.opacity = "1"
}

const closePopup = () => {
  popUp.style.visibility = "hidden"
  popUp.style.opacity = "0"
  overlay.style.display = "none"
}

closeBtn.addEventListener("click", closePopup)
overlay.addEventListener("click", closePopup)
