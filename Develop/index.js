const inquirer = require('inquirer');
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
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
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
              if (nameInput) {
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
            type: 'input',
            name: 'contributors',
            message: 'Provide names of contributors (Required)',
            validate: contributorsInput => {
              if (contributorsInput) {
                return true;
              } else {
                console.log('You need to enter at least one contributor name!');
                return false;
              }
            }
          },


          {
            type: 'checkbox',
            name: 'license',
            message: 'Which lincese would you like to apply to this project? (Choose all that apply)',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
          },
          {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
              if (linkInput) {
                return true;
              } else {
                console.log('You need to enter a project GitHub link!');
                return false;
              }
            }
          },
          {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
          },
          {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
          }
        ])
        .then(projectData => {
          portfolioData.projects.push(projectData);
          if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
          } else {
            return portfolioData;
          }
        });
    };

// function to generate the ReadMe here
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}


// function to initalize the beginning of the questions 
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getLicense = getLicense(data.license);
        writeToFile("./develop/examplereadme.md", data);
    });
}

// Function call to initialize app
init();
