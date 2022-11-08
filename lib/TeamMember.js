const fs = require("fs");

class Team {
  constructor() {
    this.teamMember = [];
  }
  addTeamMember(teamMember) {
    this.teamMember.push(teamMember);
  }
  renderTeamMember() {
    return this.teamMember.map((i) => i.teamMemberHTML()).join("");
  }
  HTML() {
    `
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
    <div class="d-flex flex-row mb-3">
      <div class="card" style="width: 18rem">
        <img src="../assets/2050116.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
          <p class="card-text" id="officeNumber">officeNumber</p>
          <p class="card-text" id="officeNumber">Department:</p>
          <a href="mailto:Susan@test.com" class="btn btn-primary">Send Email</a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img src="../assets/10211761.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Employee</h5>
          <p class="card-text">Name:</p>
          <a href="mailto:Susan@test.com" class="btn btn-primary">Send Email</a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img src="../assets/32173987.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Intern</h5>
          <p class="card-text">school name:</p>
          <a href="mailto:Susan@test.com" class="btn btn-primary">Send Email</a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Engineer</h5>
          <p class="card-text">Responsibilities:</p>
          <a href="mailto:Susan@test.com" class="btn btn-primary">Send Email</a>
          <a href="www.github.com/SolenIyassu" class="btn btn-primary"
            >Github page</a
          >
        </div>
      </div>
    </div>
  </body>
</html>`;
  }
  saveFile() {
    fs.writeFile(path, this.HTML(), (error) => {
      error;
      if (error) {
        console.log(error);
      } else {
        console.log("Successfully written in!");
      }
    });
  }
}

module.exports = TeamMember;
