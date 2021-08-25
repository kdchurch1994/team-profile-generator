const { test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

//Test that checks if the new engineer object is created successfully based on the Employee and Engineer constructors
test('Creates Engineer object', () => {
    const engineer = new Engineer('Kyle', 1, 'kdchurch@bsu.edu', 'kdchurch1994');

    expect(engineer.github).toEqual(expect.any(String));
});