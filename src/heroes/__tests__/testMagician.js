import Magician from '../Magician.js';

test('test show object type', () => {
  const result = new Magician('Magician', 'Magician');
  expect(result).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
