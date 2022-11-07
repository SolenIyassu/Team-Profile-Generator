const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const generateHTML = (Team) => {
  console.log(Team);
  const html = [];
  const generateManager = (Manager) => {
    console.log(Manager);
    let managerHTML = `
<div class='card' style='width: 100%;'>
div class class='card-header'>
${Manager.name} <br>
<ul>
<li class='list-group list-group-item'>ID: ${Manager.id}</li>
<li class='list-group list-group-item'>ID: ${Manager.email}</li>
<li class='list-group list-group-item'>ID: ${Manager.officeNumber}</li>
</ul>
</div>
`;
    html.push(managerHTML);
  };
  const generateEngineer = (Engineer) => {
    let engineerHTML = `
<div class='card' style='width: 100%;'>
div class class='card-header'>
${Engineer.name} <br>
<ul>
<li class='list-group list-group-item'>ID: ${Engineer.id}</li>
<li class='list-group list-group-item'>ID: ${Engineer.email}</li>
<li class='list-group list-group-item'>ID: ${Engineer.officeNumber}</li>
</ul>
</div>
`;
    html.push(engineerHTML);
  };
  const generateEmployee = (Employee) => {
    let employeeHTML = `
<ul>
<li class='list-group list-group-item'>ID: ${Employee.id}</li>
<li class='list-group list-group-item'>ID: ${Employee.github}</li>
<li class='list-group list-group-item'>ID: ${Employee.name}</li>
<li class='list-group list-group-item'>ID: ${Employee.email}</li>

</ul>
</div>
`;
    html.push(employeeHTML);
  };
  const generateIntern = (Intern) => {
    let internHTML = `

<ul>
<li class='list-group list-group-item'>ID: ${Intern.id}</li>
<li class='list-group list-group-item'>ID: ${Intern.email}</li>
<li class='list-group list-group-item'>ID: ${Intern.officeNumber}</li>
</ul>
</div>
`;
    html.push(internHTML);
  };
};
