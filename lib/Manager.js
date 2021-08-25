//Import the Empoyee constructor from Employee.js
const Employee = require('./Employee');

//The manager constructor is an extension of (extends) the Employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //calling the objects of the employee constructor
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    //Function that will overrid the employee role and return the role of manager
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;