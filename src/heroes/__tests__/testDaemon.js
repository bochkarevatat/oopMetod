import Daemon from '../Daemon.js';

test('test show object type Daemon', () => {
  const result = new Daemon('DaemonNew', 'Daemon');
  expect(result).toEqual({
    name: 'DaemonNew',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
