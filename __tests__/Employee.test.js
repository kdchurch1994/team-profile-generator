//allows us to refer to Employee.js to test if the Employee constructor is working properly
const Employee = require('../lib/Employee');

//The first test will determine if a new employee object is working by referring to the employee class constructor
test('Creates an employee object',() => {
    const employee = new Employee('Kyle', 1, 'kdchurch@bsu.edu');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

