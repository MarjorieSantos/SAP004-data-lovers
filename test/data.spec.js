import { filterByName, sortData, computeStats } from '../src/data.js';
import data from '../src/data/pokemon/pokemon';


describe('filterByName', () => {
  it('should be an function', () => {
    expect(typeof filterByName).toBe('function');
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => filterByName()).toThrow(TypeError);
    expect(() => filterByName(0)).toThrow(TypeError);
    expect(() => filterByName(null, [])).toThrow(TypeError);
  });
});


describe('sortData', () => {
  it('should be an function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('should return "Abra" to "Zubat" with sort order "A-Z"', () => {
    expect(sortData (data.pokemon, "name", "A-Z")[0].name).toBe('Abra');
  });

  it('should return "Zubat" to "Abra" with sort order "Z-A"', () => {
    expect(sortData (data.pokemon, "name", "Z-A")[0].name).toBe('Zubat');
  });

  it('should return "Bulbasaur" to "Mew" with sort order "1-151"', () => {
    expect(sortData (data.pokemon, "num", "crescentOrder")[0].name).toBe('Bulbasaur');
  });

  it('should return "Mew" to "Bulbasaur" with sort order "151-1"', () => {
    expect(sortData (data.pokemon, "num", "decreasingOrder")[0].name).toBe('Mew');
  });
});

describe('computeStats', () => {
  it('should be an function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('should return "16.6" for "6.9 kg" ', () => {
    expect(computeStats(data.pokemon, {weight: "6.9 kg"})).toBe('16.6');
  });
});