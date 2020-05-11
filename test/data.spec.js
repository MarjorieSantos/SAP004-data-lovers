import { filterByName, sortData, computeStats } from '../src/data.js';

const pokemons = [{
  num: "001",
  name: "Bulbasaur",
  weight: "6.9 kg",
}, {
  num: "002",
  name: "Pikachu",
  weight: "6.0 kg",
}, {
  num: "003",
  name: "SlowPoke",
  weight: "36.0 kg",
}, {
  num: "004",
  name: "Zubat",
  weight: "7.5 kg",
}, {
  num: "005",
  name: "Abra",
  weight: "19.5 kg",
}, {
  num: "006",
  name: "Mew",
  weight: "4.0 kg",
},
]

describe('filterByName', () => {
  it('should be an function', () => {
    expect(typeof filterByName).toBe('function');
  });

  it('should throw TypeError', () => {
    expect(() => filterByName()).toThrow(TypeError);
    expect(() => filterByName(0)).toThrow(TypeError);
    expect(() => filterByName(null, [])).toThrow(TypeError);
  });

  it('should return an "Pikachu" for "pikachu"', () => {
    expect(filterByName(pokemons, "pikachu")[0].name).toBe("Pikachu")
  });
});

describe('sortData', () => {
  it('should be an function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('should throw typeError', () => {
    expect(() => sortData()).toThrow(TypeError);
    expect(() => sortData(0)).toThrow(TypeError);
    expect(() => sortData(null, [])).toThrow(TypeError);
  });

  it('should return "Abra" to "Zubat" with sort order "A-Z"', () => {
    expect(sortData(pokemons, "name", "A-Z")[0].name).toBe('Abra')
  });

  it('should return "Zubat" to "Abra" with sort order "Z-A"', () => {
    expect(sortData(pokemons, "name", "Z-A")[0].name).toBe('Zubat')
  });

  it('should return "Bulbasaur" to "Mew" with sort order "1-151"', () => {
    expect(sortData(pokemons, "num", "crescentOrder")[0].name).toBe('Bulbasaur')
  });

  it('should return "Mew" to "Bulbasaur" with sort order "151-1"', () => {
    expect(sortData(pokemons, "num", "decreasingOrder")[0].name).toBe('Mew')
  });
});

 describe('computeStats', () => {
   it('should be an function', () => {
     expect(typeof computeStats).toBe('function');
   });

  it('should throw typeError', () => {
    expect(() => computeStats()).toThrow(TypeError);
    expect(() => computeStats(0)).toThrow(TypeError);
    expect(() => computeStats(null, [])).toThrow(TypeError);
  });

  it('should return "33.3" for "6.9 kg"', () => {
    expect(computeStats(pokemons, {weight: "6.9 kg"})).toBe("33.3")
  });

  it('should return "83.3" for "36.0 kg"', () => {
    expect(computeStats(pokemons, {weight: "36.0 kg"})).toBe("83.3")
  });
});
