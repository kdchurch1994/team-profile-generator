const manageGenerate = function (manager) {
    return `
    <div class ="col-4">
        <div class="card">
            <div class="header-card">
                <h3>${manager.managerName}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
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