const inquirer = require("inquirer");
const chalk = require(chalk);
const employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.role = "Manager";
    this.officeNumber = officeNumber;
  }

  getRole() {
    return this.role;
  }
  getofficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
