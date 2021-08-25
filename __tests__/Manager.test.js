//allows us to refer to Manager.js to test if the Manager constructor is working properly
const { test } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

//Test that checks if the new manager object is created successfully based on the Employee and Manager constructors
test('Creates a Manager object', () => {
    const manager = new Manager('Kyle', 1, 'kdchurch@bsu.edu', 98);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});