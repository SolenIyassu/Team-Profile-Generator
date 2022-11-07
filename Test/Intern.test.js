const Intern = require("../lib/Intern");
const Intern = require("../lib/Intern");
const Intern = require("../lib/Intern");

describe("intern", () => {
  describe("Initialization", () => {
    it("is to get the school of the intern", () => {
      const school = "Duke";
      const Intern = new Intern(school);
      expect(Intern.school).toBe(school);
    });
    it("return the role of the intern", () => {
      const Intern = new Intern(role);
      expect(Intern.role).toBe(role);
    });
  });
});
