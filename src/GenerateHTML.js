//Function that is used to generate the HTML that will use the information entered into the prompt by the user when asked to add a manager
const manageGenerate = function (manager) {//Materialize is being used to create an icon that will be displayed after the name of the manager is displayed
    return `
    <div class ="col-4">
        <div class="card">
            <div class="header-card">
                <h2>${manager.managerName}</h2>
                <h3>Manager</h3><i class="material-icons">content_paste</i>
            </div>

            <div class="body-card">
                <p class="employee-ID">ID: ${manager.employeeID}</p>
                <p class="employee-email>Email: <a href="mailto:${manager.employeeEmail}">${manager.employeeEmail}</a></p>
                <p class="manager-office>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

//Function that is used to generate the HTML that will use the information entered into the prompt by the user when asked to add a new employee and an intern is selected
const Interngenerate = function (intern) {//Materialize is being used to create an icon that will be displayed after the name of the intern is displayed
    return `
    div class="col-4"
        <div class="card">
            <div class="header-card">
                <h2>${intern.employeeName}</h2>
                <h3>Intern</h3><i class="material-icons">assignment_ind</i>
            </div>

            <div class="body-card">
                <p class="employee-ID">ID: ${intern.employeeID}</p>
                <p class="employee-email">Email: <a href="mailto:${intern.employeeEmail}">${intern.employeeEmail}</a></p>
                <p class="intern-school">School: ${intern.internSchool}</p>
            </div>
        </div>
    </div>    
    `;
}

//Function that is used to generate the HTML that will use the information entered into the prompt by the user when asked to add a new employee and an engineer is selcted
const Engineergenerate = function (engineer) {//Materialize is being used to create an icon that will be displayed after the name of the engineer is displayed
    return `
    <div class="col-4">
        div class="card">
            <div class="header-card">
                </h2>${engineer.employeeName}</h2>
                <h3>Engineer</h3><i class="material-icons">laptop_mac</i>
            </div>

            <div class="body-card">
                <p class="employee-ID">ID: ${engineer.employeeID}</p>
                <p class="employee-email">Email: <a href="mailto:${engineer.employeeEmail}">${engineer.employeeEmail}</a></p>
                <p class="engineer-github">GitHub Username: <a href="https://github.com/${engineer.engineerGithub}</a></p>
            </div>
        </div>
    <div>    
    `;
}