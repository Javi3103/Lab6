const sum = require('./sum');
test('suma de 3 + 4 to debe ser 7', () => { 
  expect(sum(3, 4)).toBe(7);
}); 