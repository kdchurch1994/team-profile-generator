const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

//Test that checks if the new intern object is created sucessfully based on the Employee and Intern constructors
test('Creates Intern object', () => {
    const intern = new Intern('Kyle', 1, 'kdchurch@bsu', 'Ball State University');

    expect(intern.school).toEqual(expect.any(String));
});

