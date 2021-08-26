
//Imports the Manger, Engineer, and Intern constructors that are all extensions of the Employee constructor
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//imports required node modules inqurier and fs
const fs = require('fs');
const inquirer = require('inquirer');

//Creates an empty array that will allow us to populate the array from the inqurier prompts and use this array to generate the team profile webpage
const groupArray = [];

// creates the function Mangeradd that will be called later to start the prompt that will ask the user to enter information specific about the manager of the group
const Manageradd = () => {
    return inquirer.prompt ([
        {//Prompts the user for the name of the manager that has the manager role for the project
            type: 'input',
            name: 'managerName',
            message: "Please enter the name of the manager of this team. (Required)",
            validate: inputName => { //validates if a name was entered. If no name was entered, the user will be prompted to again add the name of the manager
                if (inputName) {
                    return true;
                } else {
                    console.log(" Please enter the manager's name.");
                    return false;
                }
            }
        },
        { //Prompts the user to enter the employee ID of the manager. This must be a numerical value.
            type: 'input',
            name: 'employeeID',
            message: "Please enter the manager's Employee ID (Required)",
            validate: inputID => { //validates whether the user entered a valid number for the ID. The NaN (Not a number) function checks the input to see if it is a valid number. 
                if (isNaN(inputID)) { //If a valid number is entered, the value is accepted. If it is not a valid number, the user will be prompted to enter a valid number.
                    console.log (" Please enter a number as the manager's employee ID.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        { //Prompts the user to enter the email address of the manager. It must be a valid email address i.e "kdchurch123@gmail.com"
            type: 'input',
            name: 'employeeEmail',
            message: "Please enter the email of the manager of this project.",
            validate: inputEmail => { //Validate is being used to check if a valid email address was entered. The special characters below are being used to determine if the proper format for email is being used. These special characters could be considered regex values, which are regular expressions, which provide patterns for searching, validating, and manipulatating data
                validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail);
                if (validEmail) { //If the email is valid, the data is accepted. If the email is not valid, the user will be asked to enter the email address again. 
                    return true;
                } else {
                    console.log(" Please enter a valid email address.");
                    return false;
                }
            }

        },
        { //Prompts the user to enter a valid office number for the manager. It must be a valid number
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the office number of this project's manager. (Required)",
            validate: inputofficeNumber => { //Validate is being used to determine if a proper officeNumber was entered. The NaN (Not a number) function checks the input to see if it is a valid number.
                if (isNaN(inputofficeNumber)) { //If a valid number is entered, the value is accepted. If it is not a valid number, the user will be prompted to enter a valid number.
                    console.log(" Please enter a valid number for the office number.");
                    return false;
                } else {
                    return true;
                }
            }
        }  

    ])
        .then(inputManager => { //The .then promise is being used to take this data, create the const inputManager and then this data is being used to create the new manager by using the Manager constructor from Manager.js
            const {managerName, employeeID, employeeEmail, officeNumber } = inputManager
            const manager = new Manager (managerName, employeeID, employeeEmail, officeNumber);

            groupArray.push(manager); //pushes the manager information to the groupArray that is being used to store info about the project team. 
            console.log(manager);
        })
};

Manageradd();