const inquirer = require("inquirer");
const chalk = require(chalk);
const employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = "Engineer";
    this.github = github;
  }

  getRole() {
    return this.role;
  }
  getGitHub() {
    return this.github;
  }
}
