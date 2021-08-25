//Creates the employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    
    //Function that returns the name of the employee that was entered as input from the inquirer prompt
    getName() {
        return this.name;
    }

    //Function that returns the ID of the employee that was entered as an input from the inquirer prompt
    getID() {
        return this.id;
    }


}

//Exports the Employee constructor so that it can be used in other files of the program
module.exports = Employee;
