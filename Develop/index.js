// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
module.exports = { writeToFile };

// TODO: Create an array of questions for user input
const questions = [
  //project title
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter the title of your project!");
        return false;
      }
    },
  },
  //project description
  {
    type: "input",
    name: "description",
    message: "Please give a description of your project. (Required)",
    validate: (descInput) => {
      if (descInput) {
        return true;
      } else {
        console.log("Please enter a description!");
        return false;
      }
    },
  },
  //install instructinos
  {
    type: "input",
    name: "install",
    message: "Please enter the install instructions for your project.",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Please enter the install instructions!");
        return false;
      }
    },
  },
  //usage info
  {
    type: "input",
    name: "usage",
    message: "Please enter the usage info for your project.",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter the usage info!");
        return false;
      }
    },
  },
  //contribution guidelines
  {
    type: "input",
    name: "contrib",
    message: "Please enter the contribution guidelines for your project.",
    validate: (contribInput) => {
      if (contribInput) {
        return true;
      } else {
        console.log("Please enter the contribution guidelines!");
        return false;
      }
    },
  },
  //test instructinos
  {
    type: "input",
    name: "test",
    message: "Please enter the test instructions for your project.",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter the test instructions!");
        return false;
      }
    },
  },
  //liscense list
  {
    type: "list",
    name: "liscense",
    message: "Please enter the liscense for your project.",
    choices: ["MIT", "Apache", "GPL"],
  },
  //github username
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username.",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your username!");
        return false;
      }
    },
  },
  //email
  {
    type: "input",
    name: "email",
    message: "Please enter your email.",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(content) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", content, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then((answers) => generateMarkdown(answers))
  .then((markdown) => writeToFile(markdown));
