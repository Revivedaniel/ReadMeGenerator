//Pulling in FS and Inquirer
const fs = require("fs")
const inquirer = require("inquirer")

//Array of questions for inquirer
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the Title of your project?",
    },
    {
        type: "input",
        name: "problem",
        message: "What problem does this project solve?",
    },
    {
        type: "input",
        name: "projectMotivation",
        message: "Why did you build this project",
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
        //These are the options presented in the list
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
//This function creates the readme using inline literals passed through from from the writeToFile function
const readMeTemplate = (data, licenseBadge) => `
# ${data.projectTitle}
${licenseBadge}
## Description
- ${data.problem}
- ${data.projectMotivation}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${data.installationInstruct}
## Usage
${data.projectUsage}
## Credits
${data.gitHubUser}
## License
${data.license}
## How to Contribute
${data.ContributionInstruct}
## Tests
${data.testInstruct}
## Questions
* [gitHubLink](https://github.com/${data.gitHubUser})
* <a href="mailto:it-support@kth.se">${data.email}</a>`

//This function validates the license used and then created the file using the readMeTemplate function
function writeToFile(data) {
    let licenseBadge = ""
    //This switch validates which badge to display at the top of the readme for each license
    switch (data.license) {
        case "Apache License 2.0":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            break;
        case "GNU GPLv3":
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            break;
        case "GNU GPLv2":
            licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
            break;
        case "MIT":
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break;
        case "ISC License":
            licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
            break;
        default:
            break;
    }
    //Using the readMeTemplate to create the document content
    const newReadMe = readMeTemplate(data, licenseBadge)
    //using fs to create a file and passing through the response from the readMeTemplate function
    fs.writeFile("./newReadMe.md", newReadMe,(err) => {
        //catching the error if any or notifying the user that the readme was created succesfully
        err ? console.log(err) : console.log('Successfully created newReadMe.md!')
    })
    
}
//A function to initialize the inquirer prompt
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(data)
    })
}

// Function call to initialize app
init();

