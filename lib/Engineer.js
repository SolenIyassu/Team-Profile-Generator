const inquirer = require("inquirer");
const chalk = require("chalk");
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, github);
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
module.exports = Engineer;
