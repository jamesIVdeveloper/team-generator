const inquirer = require("inquirer");

const managerPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "manager",
      message: "What is the manager's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter an ID");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter an email");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "office",
      message: "What is the manager's office number?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter an office number");
          return false;
        }
      },
    },
  ]);
};

const engineerPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's ID?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter an ID");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter an email");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub username?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a username");
          return false;
        }
      },
    },
  ]);
};

const internPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's ID?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter an ID");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter an email");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a school");
          return false;
        }
      },
    },
  ]);
};

managerPrompt().then(engineerPrompt).then(internPrompt);
