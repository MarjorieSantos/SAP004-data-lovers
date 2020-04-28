import {
    filterByName, sortData
} from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon

const searchInput = document.getElementById("search-input")
const pokemonList = document.getElementById("pokemon-list")
const clearBtn = document.getElementById("clear-btn")
const noResultFound = document.getElementById("no-results-found")


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



searchInput.addEventListener("keyup", searchByName)
clearBtn.addEventListener("click", renderAllPokemons)


const filter = document.querySelector("#filter-for");

filter.addEventListener("change", function (event) {
    if (filter.value == "A-Z") {
        const arrayOrder = sortData(pokemons, "name", "A-Z")
        renderAllPokemons(arrayOrder)
    } else if (filter.value == "Z-A") {
        const arrayOrder = sortData(pokemons, "name", "Z-A")
        renderAllPokemons(arrayOrder)
    } else if (filter.value == "crescentOrder") {
        const arrayOrder = sortData(pokemons, "num", "crescentOrder")
        renderAllPokemons(arrayOrder)
    } else if (filter.value == "decreasingOrder") {
        const arrayOrder = sortData(pokemons, "num", "decreasingOrder")
        renderAllPokemons(arrayOrder)
    }
})