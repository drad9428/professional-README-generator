// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    return ''
  }
  else{
    return `![badge](https://img.shields.io/static/v1?label=License&message=${license}&color=green)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None'){
    return ''
  }
  else{
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return ''
  }
  else{
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  ## Description
  * ${data.description}

  ## Table of Contents
  * [Languages Used](#languages-used)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Application Link](#application-link)
  * [Contact](#contact)

  ## Languages Used
  * ${data.languages}
  ## Installation
  * ${data.installation}
  ## Usage
  * ${data.instructions}
  ## License
  * ${data.license}
  ## Contributors
  * ${data.contributors}
  ## Tests
  * ${data.tests}
  ## Application Link
  * ${data.link}
  ## Contact
  * Email: [${data.email}](mailto:${data.email})
  * GitHub: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
