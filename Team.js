const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const employee = require("./lib/Employee");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

const generateHTML = (Team) => {
  console.log(Team);
  const html = [];
  const generateManager = (manager) => {
    console.log(Manager);
    let managerHTML = ` <div class="d-flex flex-row mb-3">
      <div class="card" style="width: 18rem">
        <img src="../assets/2050116.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
          <p class="card-text" id="officeNumber">officeNumber:${manager.officeNumber}</p>
          <p class="card-text" id="officeNumber">Department:${manager.department}</p>
          <p class="card-text" id="email">Email:${manager.email}
          <a href="mailto:Susan@test.com" class="btn btn-primary">Send Email</a>
        </div>
      </div>`;
    html.push(managerHTML);
  };
  // <li class='list-group list-group-item'>ID: ${manager.id}</li>
  {
    /* <li class='list-group list-group-item'>ID: ${manager.email}</li>
<li class='list-group list-group-item'>ID: ${manager.officeNumber}</li> */
  }
  const generateEngineer = (engineer) => {
    let engineerHTML = `  <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Engineer</h5>
          <p class="card-text">Responsibilities:</p>
          <a href="mailto:${engineer.email}" class="btn btn-primary">Send Email</a>
          <a href="www.github.com/${engineer.github}" class="btn btn-primary"
            >Github page</a
          >
        </div>
      </div>
      `;
    html.push(engineerHTML);
  };
  const generateEmployee = (employee) => {
    let employeeHTML = `
<div class="card" style="width: 18rem">
        <img src="../assets/10211761.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Employee</h5>
          <p class="card-text">Name:${employee.name}</p>
          <a href="mailto:${employee.email}" class="btn btn-primary">Send Email</a>
        </div>
      </div>
`;
    html.push(employeeHTML);
  };
  const generateIntern = (intern) => {
    let internHTML = `

      <div class="card" style="width: 18rem">
        <img src="../assets/32173987.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Intern</h5>
          <p class="card-text">school name:${intern.school}</p>
          <a href="mailto:${intern.email}" class="btn btn-primary">Send Email</a>
        </div>
      </div>
    
    </div>
  </body>
</html>
`;
    html.push(internHTML);
  };
  for (let i = 0; i < Team.length; i++) {
    if (Team[i].getRole() === "Manager") {
      generateManager(Team[i]);
    }
    if (Team[i].getRole() === "Engineer") {
      generateEngineer(Team[i]);
    }
    if (Team[i].getRole() === "Intern") {
      generateIntern(Team[i]);
    }
  }
  return html.json("");
};
module.exports = (Team) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <nav>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Manager</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Employee</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Intern</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Engineer</a>
        </li>
      </ul>
    </nav>
  ${generateHTML(Team)}
  </body>
  `;
};

//   console.log(Team);
//   const html = [];
//   const generateManager = (manager) => {
//     console.log(Manager);
//     let managerHTML = `
// <div class='card' style='width: 100%;'>
// div class class='card-header'>
// ${manager.name} <br>
// <ul>
//
// </ul>
// </div>
// `;
//     html.push(managerHTML);
//   };
//
// <div class='card' style='width: 100%;'>
// div class class='card-header'>
// ${engineer.name} <br>
//   <h5 class="card-title">Manager</h5>
//           <p class="card-text" id="officeNumber">officeNumber</p>
//           <p class="card-text" id="officeNumber">Department:</p>
//           <a href="mailto:Susan@test.com" class="btn btn-primary">Send Email</a>
// </ul>
// </div>
// `;
//
//   };
//
//   };
//
//
// };
