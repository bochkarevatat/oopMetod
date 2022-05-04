import Character from '../Character.js';
import Daemon from '../Daemon.js';

describe('to have create an object Character or throw the error', () => {
  test('to have create an object with object Daemon', () => {
    const result = new Character('Nemo', 'Daemon');
    const expected = {
      name: 'Nemo',
      type: 'Daemon',
      health: 100,
      level: 1,
    };
    expect(result).toEqual(expected);
  });

  test('to have throw error if the name of the object is not a string', () => {
    const expected = 'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов!';
    expect(() => new Character(22, 'Daemon')).toThrowError(expected);
  });

  test('to have throw error if the name of the object is longer than 10 characters', () => {
    const expected = 'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов!';
    expect(() => new Character('DemonNewDemon', 'Daemon')).toThrowError(expected);
  });

  test('to have throw error if the name of the object is less than 2 characters', () => {
    const expected = 'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов!';
    expect(() => new Character('N', 'Daemon')).toThrowError(expected);
  });

  test('to have throw error if the hero type is wrong', () => {
    const expected = 'Ошибка! Такого героя нет!';
    expect(() => new Character('Nemo', 'Daemon2')).toThrowError(expected);
  });

 
});
