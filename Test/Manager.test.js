const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initilization", () => {
    it(" should return the office number ", () => {
      const officeNumber = "12";
      const manager = new Manager(officeNumber);
      expect(manager.officeNumber).toBe(officeNumber);
    });
    it("should return the role as manager ", () => {
      const Manager = new Manager(role);
      expect(Manager.role).toBe(role);
    });
  });
});
