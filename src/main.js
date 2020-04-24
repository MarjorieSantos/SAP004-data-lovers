import { filterByName } from './data.js';

import data from './data/pokemon/pokemon.js';


const searchInput = document.getElementById("search-input")


const searchByName = () => {
    const searchTherme = searchInput.value
    const result = filterByName(data.pokemon,searchTherme)
    console.log(result)
}

searchInput.addEventListener("keyup",searchByName)