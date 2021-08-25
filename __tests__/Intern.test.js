const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

//Test that checks if the new intern object is created sucessfully based on the Employee and Intern constructors
test('Creates Intern object', () => {
    const intern = new Intern('Kyle', 1, 'kdchurch@bsu', 'Ball State University');

    expect(intern.school).toEqual(expect.any(String));
});

//Test checks if the getSchool() function is getting school that is being attended by the Intern
test('Gets the school name of the Intern', () => {
    const intern = new Intern('Kyle', 1, 'kdchurch@bsu', 'Ball State University');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

//Test checks if the gitRole() function is getting the role of the Engineer and returning "Engineer" as the role
test('Gets the Role of the Engineer', () => {
    const intern = new Intern('Kyle', 1, 'kdchurch@bsu.edu', 'Ball State University');

    expect(intern.getRole()).toEqual("Intern");
});

