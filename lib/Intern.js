const inquirer = require("inquirer");
const chalk = require(chalk);
const employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.role = "Intern";
    this.school = school;
  }

  getRole() {
    return this.role;
  }
  getschool() {
    return this.school;
  }
}

module.exports = Intern;
