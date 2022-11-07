const Employee = require("../lib/Employee");
const employee = new Employee("Solen", "123455", "solen@test.com");

describe(employee, () => {
  describe("Initializaiton", () => {
    it("test if we can get the employee's values", () => {
      expect(employee.name).toBe("Solen");

      expect(email).toBe("solen@test.com");
    });
    it("test if we can get the name of the employee", () => {
      expect(employee.id).toBe("123455");
    });
    it("test if we can get the email of the employee", () => {
      expect(employee.getEmail()).toBe("Solen.Iyassu@gmail.com");
    });
  });
});
