//Pulling in FS and Inquirer
const fs = require("fs")
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the Title of your project?",
    },
    {
        type: "input",
        name: "projectDesc",
        message: "Write a description for your project.",
    },
    {
        type: "input",
        name: "insallationInstruct",
        message: "How do you install the project?",
    },
    {
        type: "input",
        name: "projectUsage",
        message: "Write some Usage Information",
    },
    {
        type: "input",
        name: "ContributionInstruct",
        message: "How can someone contribute to the project?",
    },
    {
        type: "input",
        name: "testInstruct",
        message: "Write some test instructions",
    },
    {
        type: "list",
        name: "license",
        message: "What license do you want?",
        choices: ["Apache License 2.0", "GNU GPLv3", "GNU GPLv2", "MIT", "ISC License", "No License"]
    },
    {
        type: "input",
        name: "gitHubUser",
        message: "What is your GitHub Username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
