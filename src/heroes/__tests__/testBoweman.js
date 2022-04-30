import Boweman from '../Boweman.js';

test('test show object type', () => {
  const result = new Boweman('BowemanNew', 'Boweman');
  expect(result).toEqual({
    name: 'BowemanNew',
    type: 'Boweman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
