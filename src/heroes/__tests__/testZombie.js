import Zombie from '../Zombie.js';

test('test show object type Zombie', () => {
  const result = new Zombie('ZombieNew', 'Zombie');
  expect(result).toEqual({
    name: 'ZombieNew',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
