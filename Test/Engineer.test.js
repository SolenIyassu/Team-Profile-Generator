const Engieer = require("../lib/Engineer");

describe("engineer", () => {
  describe("Initialization", () => {
    it("is confirming that susan is an engineer", () => {
      expect(engineer.name).isEqual("Susan");
    });
    it("create an instance of engineer", () => {
      const name = "Susan";
      const engineer = new Engineer(name);
      expect(engineer.name).toBe(name);
    });
    it("should return the role of the engineer", () => {
      const engineer = new Engineer(role);
      expect(engineer.role).toBe(role);
    });
  });
});
