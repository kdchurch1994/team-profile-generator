const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

//Test that checks if the new engineer object is created successfully based on the Employee and Engineer constructors
test('Creates Engineer object', () => {
    const engineer = new Engineer('Kyle', 1, 'kdchurch@bsu.edu', 'kdchurch1994');

    expect(engineer.github).toEqual(expect.any(String));
});

//

//Test checks if the getGithub() function is getting the github username of the Engineer 
test('Gets the github username of the Engineer', () => {
    const engineer = new Engineer('Kyle', 1, 'kdchurch@bsu.edu', 'kdchurch1994');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

//Test checks if the gitRole() function is getting the role of the Engineer and returning "Engineer" as the role
test('Gets the Role of the Engineer', () => {
    const engineer = new Engineer('Kyle', 1, 'kdchurch@bsu.edu', 'kdchurch1994');

    expect(engineer.getRole()).toEqual("Engineer");
});
