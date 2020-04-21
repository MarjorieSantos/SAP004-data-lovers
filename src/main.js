//importei a constante filterPokemon do arquivo data.js para o main.js
import { filterData, sortData } from './data.js';
import data from './data/pokemon/pokemon.js';

const listCards = document.querySelector("#list-cards")

function render(arrayPokemon) {
  arrayPokemon.forEach(function (pokemon) {
    listCards.innerHTML += `
        <div class="cards">
            <img src="${pokemon.img}" alt="Bulbasaur">
            <ul>
              <li>Nome: ${pokemon.name}</li>
              <li>Nº: ${pokemon.num}</li>
              <li>Tipo: ${pokemon.type}</li>
              <li>Poder: </li>
            </ul>
          </div>
        `
  })
}

render(data.pokemon)

filterData(data.pokemon, "Bulbasaur")



const filter = document.querySelector("#filter")

filter.addEventListener("change", function (event) {
  
})


