const inquirer = require("inquirer");
const fs = require("fs");
const express = express;
const path = require("path");

// inquirer;
// const choices = () => {
//   return inquirer.prompt([
//     {
//       type: "checkbox",
//       message: "What is your position?",
//       name: "Role",
//       choices: ["Engineer", "Manager", "Employee"],
//       validate: (input) => {
//         if (input) {
//           return true;
//         } else {
//           console.log("Enter a response!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "checkbox",
//       message: "What is your email?",
//       name: "email",
//       choices: ["Engineer", "Manager", "Employee"],
//       validate: (input) => {
//         if (input) {
//           return true;
//         } else {
//           console.log("Enter a response!");
//         }
//       },
//     },
//     {
//       type: "checkbox",
//       message: "What is your id?",
//       name: "Role",
//       choices: ["Engineer", "Manager", "Employee"],
//       validate: (input) => {
//         if (input) {
//           return true;
//         } else {
//           console.log("Enter a response!");
//         }
//       },
//     },
//     {
//       type: "checkbox",
//       message: "What is your Office number?",
//       name: "Role",
//       choices: ["Engineer", "Manager", "Employee"],
//       validate: (input) => {
//         if (input) {
//           return true;
//         } else {
//           console.log("Enter a response!");
//         }
//       },
//     },
//   ]). then(answers=> {
//       console.log(answers);
//       const manager = new manager(answers.name, answers.id, answers.email, answers.officeNumber)
//   })
// };

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select which option you would like to continue with:",
        choices: [
          "add an engineer",
          "add an intern",
          "finish building my team",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.menu) {
        case "add an engineer":
          promptEngineer();
          break;
        case "add an intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
};

const promptEngineer = () => {
  console.log(`
    ==================
    Add a New Engineer
    ==================
    `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of engineer?",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter the name of the Engineer!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeID",
        message: "What is your employee ID?",
        validate: (employeeID) => {
          if (employeeID) {
            return true;
          } else {
            console.log("Please enter your employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (emailAddress) => {
          if (emailAddress) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "GitHub",
        message: "What is your github ?",
        validate: (gitHub) => {
          if (gitHub) {
            return true;
          } else {
            console.log("Please enter your GitHub!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answer.name,
        answers.employeeID,
        answers.emailAddress,
        answers.gitHub
      );
      teamMember.push(engineer);
      promptMenu;
    });
};
const promptIntern = () => {
  console.log(`
    ==================
    Add a New Intern
    ==================
    `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of intern?",
        validate: (intern) => {
          if (intern) {
            return true;
          } else {
            console.log("Please enter the name of the intern!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeID",
        message: "What is your employee ID?",
        validate: (employeeID) => {
          if (employeeID) {
            return true;
          } else {
            console.log("Please enter your employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (emailAddress) => {
          if (emailAddress) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "GitHub",
        message: "What is your github ?",
        validate: (gitHub) => {
          if (gitHub) {
            return true;
          } else {
            console.log("Please enter your GitHub!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answer.name,
        answers.employeeID,
        answers.emailAddress,
        answers.gitHub
      );
      teamMember.push(intern);
      promptMenu();
    });
};

const buildTeam = () => {
  console.log(`
        =================
        Building My Team!
        =================
        `);
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, generateSite(teamMember));
};

promptManager();
