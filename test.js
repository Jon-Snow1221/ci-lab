const getGreeting = require('./project');
// const getGroceryList  = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

// test('get grocery list', () => {
//   expect(getGroceryList('Eggs', 'Milk', 'Bread')).toBe('Grocery List: EggsMilkBread');
// });