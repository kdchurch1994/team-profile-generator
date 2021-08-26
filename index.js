
//Imports the Manger, Engineer, and Intern constructors that are all extensions of the Employee constructor
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//imports required node modules inqurier and fs
const fs = require('fs');
const inquirer = require('inquirer');

//Creates an empty array that will allow us to populate the array from the inqurier prompts and use this array to generate the team profile webpage
const groupArray = [];

// creates the function Mangeradd that will be called later to start the prompt that will ask the user to enter specific information about the manager of the group
const managerAdd = () => {
    return inquirer.prompt ([
        {//Prompts the user for the name of the person that has the manager role for the project
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
        .then(inputManager => { //The .then promise is being used to take this data, create the const inputManager and then uses this data to create the new manager by using the Manager constructor from Manager.js
            const {managerName, employeeID, employeeEmail, officeNumber } = inputManager
            const manager = new Manager (managerName, employeeID, employeeEmail, officeNumber);

            groupArray.push(manager); //pushes the manager information to the groupArray that is being used to store info about the project team. 
            console.log(manager);
        })
};

//Function that will add an employee based on which option (Intern or Engineer) is selected from the inquirer prompt. This function will rely on the Employee, Intern, and Engineer constructors to add a new team member
const employeeAdd = () => {

    //Will provide a graphic message that says we are adding a new member to the project team
    console.log(`
    ===============================
    Adding a new member to the team
    ===============================
    `);

    //Allows us to prompt the user if they want to add additional employees to the project team. Note that the user will be required to add at least one additional member to the team.
    return inquirer.prompt ([
        { //Prompts the user to select the role of the employee that they are trying to add to the project team. 
            type: 'list',
            name: 'employeeRole',
            message: "Please select the role of the employee you are wanting to add to the project team. (Required)",
            choices: ['Engineer', 'Intern']
        },
        {//Prompts the user to enter the name of the employee that they are trying to add to the project team
            type: 'input',
            name: 'employeeName',
            message: "Please enter the name of the employee you are wanting to add to the project team. (Required)",
            validate: inputName => { //validates if a name was entered. If no name was entered, the user will be prompted to again add the name of the employee
                if (inputName) {
                    return true;
                } else {
                    console.log ("Please enter a valid name for the Employee.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Please enter the ID that belongs to this employee. (Required)",
            validate: inputID => { //validates whether the user entered a valid number for the ID. The NaN (Not a number) function checks the input to see if it is a valid number. 
                if (isNaN(inputID)) { //If a valid number is entered, the value is accepted. If it is not a valid number, the user will be prompted to enter a valid number.
                    console.log (" Please enter a number for the employee ID.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {//Prompts the user to enter the email address of the employee. It must be a valid email address i.e "kdchurch123@gmail.com
            type: 'input',
            name: 'employeeEmail',
            message: "Please provide the email address of the employee. (Required)",
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
        {//Prompts the user to enter the school that the Intern is attending. This only applies if the user selected the Intern role.
            type: 'input',
            name: 'internSchool',
            message: "Please enter the school that the Intern is attending. (Required)",
            when: (input) => input.employeeRole === "Intern", //This question will only be prompted if the user selects the Intern employee role.
            validate: inputSchool => {
                if (inputSchool) {
                    return true;
                } else {
                    console.log("Please enter the school that the Intern is attending.");
                    return false;
                }
            }
        },
        {//Prompts the user to enter the Enginer's github username. This only applies if the user selected the Engineer role.
            type: 'input',
            name: 'engineerGithub',
            message: "Please enter the Engineer's github username. (Required)",
            when: (input) => input.employeeRole === "Engineer", //The when statement means that this question will only be prompted if the user selects the Engineer employee role.
            validate: inputGithub => {
                if (inputGithub) {
                    return true;
                } else {
                    console.log("Please provide a valid github username.");
                }
            }
        },
        {//Asks the user if they want to add another employee to the team. If they enter yes, they will be taken through the prompt again. If not, the program will end and the html page will be generated
            type: 'confirm',
            name: 'addEmployeeConfirm',
            message: "Would you like to add more members to the team?",
            default: false //False being the default means that if the user does not enter anything, the program will treat this as if the user ented No when prompted to add more employees. 
        }
    ])
        .then(employeeInput => { //The .then promise is being used to take this data, create the const employeeInput and then uses this data to create the new employee by using the Intern or Engineer constructors depending on what role was selected
            let {employeeRole, employeeName, employeeID, employeeEmail, internSchool, engineerGithub, addEmployeeConfirm} = employeeInput
            let employee; //sets employee to an empty value

            if (employeeRole === "Intern") { //If the Intern role was selected during the inquirer prompt, the employee variable is set to new Intern, which will use the Intern constructor from Intern.js to create a new Intern. 
                employee = new Intern (employeeName, employeeID, employeeEmail, internSchool);
                
                console.log(employee);
            } else if (employeeRole === "Engineer") { //If the Engineer role was selected during the inquirer prompt, the employee variable is set to new Engineer, which will use the Engineer constructor from Engineer.js to create a new Engineer. 
                employee = new Engineer (employeeName, employeeID, employeeEmail, engineerGithub);

                console.log(employee)
            }

            groupArray.push(employee);

            //If statement that will restart the inqurier prompt if the user selects to add additional employees. If the user selects no, the groupArray is returned
            if (addEmployeeConfirm) {
                return employeeAdd(groupArray);
            } else {
                return groupArray;
            }
        })
};

employeeAdd();

//managerAdd();

