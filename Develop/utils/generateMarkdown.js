//Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //MIT
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  //APACHE 2.0
  else if (license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  // GPL 3.0
  else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  // BSD 3
  else if (license === "BSD 3") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  // NONE
  else if(license === "None"){
    return "";
  }
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
   //MIT
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  }
  //APACHE 2.0
  else if (license === "APACHE 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  }
  // GPL 3.0
  else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  }
  // BSD 3
  else if (license === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  }
  // NONE
  else if (license === "None") {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}   ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation Guide](#installation-guidelines)
  * [Usage Guide](#usage-guidelines)
  * [License](#license)
  * [Contribution Guide](#contribution-guidelines)
  * [Testing Guide](#testing-guidelines)
  * [Contact](#contact-information) 
    
  ## Installation Guidelines
  ${data.installation}

  ## Usage Guidelines
  ${data.usage}

  ## License
  This project is protected under <a href="${renderLicenseLink(data.license)}" target="_blank">${data.license}</a> . 


  ## Contribution Guidelines
  ${data.contribution}

  ## Testing Guidelines
  ${data.testing}

  ## Contact Information
  For questions please refer to: 
   * GitHub: ${data.github}
   * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
