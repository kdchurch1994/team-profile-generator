//Import the Empoyee constructor from Employee.js
const Employee = require('./Employee');

//The Engineer constructor is an extension of (extends) the Employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //calling the objects of the employee constructor
        super (name, id, email);

        this.github = github;
    }

    //Function that returns the github username of the Engineer that was entered as input from the inquirer prompt
    getGithub() {
        return this.github;
    }

    //Function that returns the role of the Engineer, which will be "Engineer"
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;

