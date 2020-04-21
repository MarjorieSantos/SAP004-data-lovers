//importei a constante filterPokemon do arquivo data.js para o main.js
import { filterPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

//#list-cards vem da section do HTML que agrupa todos os cards que irão aparecer na tela, assim guardei ele em uma variável chamada ListCard
const listCards = document.querySelector("#list-cards")

//para não ter que ficar criando vários innerHTML, a função render recebe 
//um array de todos os pokemons que está no arquivo pokemon.js
//listCard irá receber cada card a partir da execução do forEach  
//o forEach() --> vai percorrer o array:pokemon até o final, quando terminar vai printar no HTML as informações de cada personagem

//tamplateString "inclui" a div(cards) na section list-cards do HTML
function render(arrayPokemon){
    arrayPokemon.forEach(function(pokemon){
        listCards.innerHTML += `
        <div class="cards">
            <img src="${pokemon.img}" alt="Bulbasaur">
            <ul>
              <li>Nome: ${pokemon.name}</li>
              <li>Nº: ${pokemon.num}</li>
              <li>Tipo:</li>
              <li>Poder:</li>
            </ul>
          </div>
        `
    })
}
//para que a inforamação apareça no local "correto", basta concatenar 
//com o item do objeto que você quer  ex: ${pokemon.name} -> vai pegar apenas o NOME do pokemon e mostrar no item "nome", como se fosse um span

//o render sempre vai receber um array de "pokemon" - data
// e irá mostrar na tela os cards de acordo com o array que foi passado
render(data.pokemon)