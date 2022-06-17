// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "* ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  if (license === "Apache") {
    return "* ![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
  }
  if (license === "GNU GPL") {
    return "* ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[the MIT license](https://opensource.org/licenses/MIT)";
  }
  if (license === "Apache") {
    return "[the Apache license](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "GNU GPL") {
    return "[the GNU GPL license](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return "no license";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.liscense)}

## Table of Contents

* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Description
${data.description}

## License
* This application is covered by ${renderLicenseLink(data.liscense)}.


## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contrib}

## Test
${data.test}

## Questions
If you have any questions, you can visit [my GitHub](https://github.com/${
    data.username
  }) or email me at ${data.email}.
  `;
}

module.exports = generateMarkdown;
