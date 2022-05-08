import Character from '../Character';
import Bowman from '../Bowman';

test('should class name === string', () => {
  const hero = new Character('archer');
  expect(hero.name).toBe('archer');
});

test('should class error', () => {
  expect(() => new Character(5)).toThrow('Такого героя не существует');
});

test('should lavel up', () => {
  const archer = new Bowman('archer');
  archer.levelUp();
  const expected = {
    name: 'archer',
    health: 100,
    level: 2,
    type: 'Bowman',
    attack: 30,
    defence: 30,
  };
  expect(archer).toEqual(expected);
});

test('should level up error', () => {
  const hero = new Character('hero', 0);
  expect(() => hero.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('should valid damage', () => {
  const archer = new Bowman('arher');
  archer.damage(10);
  expect(archer.health).toBeCloseTo(92.5);
});

test('should damage if health === 0', () => {
  const archer = new Bowman('arher', -10);
  archer.damage(10);
  expect(archer.health).toBeCloseTo(-10);
});
