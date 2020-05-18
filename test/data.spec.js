import { filterByName, sortBy, getWeitghtPercentage, filterByType } from '../src/data.js';
import data from './mock';

describe('filterByName', () => {
  it('should be an function', () => {
    expect(typeof filterByName).toBe('function');
  });

  it('should throw TypeError', () => {
    expect(() => filterByName()).toThrow(TypeError);
    expect(() => filterByName(0)).toThrow(TypeError);
    expect(() => filterByName(null)).toThrow(TypeError);
  });

  it('should return an "Pikachu" for "pikachu"', () => {
    expect(filterByName(data.pokemon, "pikachu")[0].name).toBe("Pikachu")
  });
});

describe('filterByType', () => {
  it('should be an function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('should throw TypeError', () => {
    expect(() => filterByType()).toThrow(TypeError);
    expect(() => filterByType(0)).toThrow(TypeError);
    expect(() => filterByType(null)).toThrow(TypeError);
  });

  it('should return an "Charmander" for "Fire"', () => {
    expect(filterByType(data.pokemon, "Fire")[0].name).toBe("Charmander")
  });

  it('should return an "Jynx" for "Ice"', () => {
    expect(filterByType(data.pokemon, "Ice")[2].name).toBe("Jynx")
  });
});

describe('sortBy', () => {
  it('should be an function', () => {
    expect(typeof sortBy).toBe('function');
  });

  it('should throw typeError', () => {
    expect(() => sortBy()).toThrow(TypeError);
    expect(() => sortBy(0)).toThrow(TypeError);
    expect(() => sortBy(null)).toThrow(TypeError);
  });

  it('should return "Abra" to "Zubat" with sort order "A-Z"', () => {
    expect(sortBy(data.pokemon, "name", "A-Z")[0].name).toBe('Abra')
  });

  it('should return "Zubat" to "Abra" with sort order "Z-A"', () => {
    expect(sortBy(data.pokemon, "name", "Z-A")[0].name).toBe('Zubat')
  });

  it('should return "Bulbasaur" to "Mew" with sort order "1-151"', () => {
    expect(sortBy(data.pokemon, "num", "crescentOrder")[0].name).toBe('Bulbasaur')
  });

  it('should return "Mew" to "Bulbasaur" with sort order "151-1"', () => {
    expect(sortBy(data.pokemon, "num", "decreasingOrder")[0].name).toBe('Mew')
  });
});

describe('getWeitghtPercentage', () => {
  it('should be an function', () => {
    expect(typeof getWeitghtPercentage).toBe('function');
  });

  it('should throw typeError', () => {
    expect(() => getWeitghtPercentage()).toThrow(TypeError);
    expect(() => getWeitghtPercentage(0)).toThrow(TypeError);
    expect(() => getWeitghtPercentage(null)).toThrow(TypeError);
  });

  it('should return "16.6" for "6.9 kg', () => {
    expect(getWeitghtPercentage(data.pokemon, { weight: "6.9 kg" })).toBe("16.4")
  });

  it('should return "30.5" for "12.5 kg', () => {
    expect(getWeitghtPercentage(data.pokemon, { weight: "12.5 kg" })).toBe("30.9")
  });
});


