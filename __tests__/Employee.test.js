//allows us to refer to Employee.js to test if the Employee constructor is working properly
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

//The first test will determine if a new employee object is working by referring to the employee class constructor
test('Creates an employee object',() => {
    const employee = new Employee('Kyle', 1, 'kdchurch@bsu.edu');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//Testing the getName function that should return the name that is entered.
test('Gets the Employee name', () => {
    const employee = new Employee('Kyle', 1, 'kdchurch@bsu.edu');

    expect(employee.getName()).toEqual(expect.any(String));
});

//Testing the getId() function that should return the ID of the Employee that is entered into the prompt.
test('Gets the Employee ID', () => {
    const employee = new Employee('Kyle', 1, 'kdchurch@bsu.edu');

    expect(employee.getID()).toEqual(expect.any(Number));
})



