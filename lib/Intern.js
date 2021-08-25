//Import the Employee constructor from Employee.js
const Employee = require('./Employee');

//The Intern constructor is an extention of (extends) the Employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        //calling the objects of the employee constructor
        super (name, id, email, school);

        this.school = school;
    }
    
    //Function that returns the school that the Intern is currently attending
    getSchool() {
        return this.school;
    }

    //Function that will override the employee role and return the role of Intern
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;