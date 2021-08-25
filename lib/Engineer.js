//Import the Empoyee constructor from Employee.js
const Employee = require('./Employee');

//The Engineer constructor is an extension of (extends) the Employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //calling the objects of the employee constructor
        super (name, id, email);

        this.github = github;
    }
}

module.exports = Engineer;

