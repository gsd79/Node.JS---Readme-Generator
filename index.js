// Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./Develop/utils/generateMarkdown");

// array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project? (Required)',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('You need to enter a project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for installation (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to enter installation instructions!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Provide examples of usage (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to enter usage information!');
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'license',
        message: 'Which lincese would you like to apply to this project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose one from the list!');
                return false;
            }
        }
    },
    

    {
        type: 'input',
        name: 'contribution',
        message: 'Provide guidelines for contribution.(Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to enter something!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'testing',
        message: 'Provide guidelines for testing.(Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to enter something!');
                return false;
            }
        }
    },
];

    

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
        console.error(err)
        return
        }
    })
}
// Function to initialize app

function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./appexample/README.md", data);
    });
}

// Function call to initialize app
init();