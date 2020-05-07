import { filterByName, sortData, computeStats } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js'



describe('filterByName', () => {
  it('should be an function', () => {
    expect(typeof filterByName).toBe('function');
  });

  it('should throw TypeError', () => {
    expect(() => filterByName()).toThrow(TypeError);
  });

  it('should return  an "Array" for "Pikachu"', () => {
    expect(filterByName(data.pokemon,"Pikachu")).toBe([{"avg_spawns": 21, "candy": "Pikachu Candy", "candy_count": 50, "egg": "2 km", "height": "0.41 m", "id": 25, "img": "http://www.serebii.net/pokemongo/pokemon/025.png", "multipliers": [2.34], "name": "Pikachu", "next_evolution": [{"name": "Raichu", "num": "026"}], "num": "025", "spawn_chance": 0.21, "spawn_time": "04:00", "type": ["Electric"], "weaknesses": ["Ground"], "weight": "6.0 kg"}])
  });
});


describe('sortData', () => {
  it('should be an function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('should throw typeError', () => {
    expect(() => sortData()).toThrow(TypeError);
  });

  it('should return "Abra" to "zubat" with sort order "A-Z"', () =>{
    expect(sortData(data.pokemon,"name","A-Z")[0].name).toBe('Abra')
  });

  it('should return "Zubat" to "Abra" with sort order "Z-A"', () =>{
    expect(sortData(data.pokemon,"name","Z-A")[0].name).toBe('Zubat')
  });

  it('should return "Bulbasaur" to "Mew" with sort order "1-151"', () =>{
    expect(sortData(data.pokemon,"num","crescentOrder")[0].name).toBe('Bulbasaur')
  });

  it('should return "Mew" to "Bulbasaur" with sort order "1-151"', () =>{
    expect(sortData(data.pokemon,"num","decreasingOrder")[0].name).toBe('Mew')
  });

  
});



describe('computeStats', () => {
  it('should be an function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('should throw typeError', () => {
    expect(() => computeStats()).toThrow(TypeError);
  });

  it('should return "16.6" for "6.9 kg',() => {
  expect(computeStats(data.pokemon,{weight:"6.9 kg"})).toBe("16.6")
  });

  it('should return "30.5" for "12.5 kg',() => {
    expect(computeStats(data.pokemon,{weight:"12.5 kg"})).toBe("30.5")
    });
});
