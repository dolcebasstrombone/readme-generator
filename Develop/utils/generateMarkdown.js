// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents

* [Description](#description)
* [Licnese](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Description
${data.description}

## License
...
This application is covered by the ... license.

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contrib}

## Test
${data.test}

## Questions
If you have any questions, you can visit [my GitHub](https://github.com/${data.username}) or email me at ${data.email}.
  `;
}

module.exports = generateMarkdown;
