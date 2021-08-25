//Creates the employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
}

//Exports the Employee constructor so that it can be used in other files of the program
module.exports = Employee;
