
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Install](#install)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [GitHub Username](#github-username)
  * [Email](#email)
  ${renderLicenseSection(data.license)}

  ### Install

  \`\`\`
  ${data.instruction}
  \`\`\`


  ### Usage
  \`\`\`
  ${data.usage}
  \`\`\`

  ### Contribution
  \`\`\`
  ${data.contribution}
  \`\`\`

  ### Tests
  \`\`\`
  ${data.testing}
  \`\`\`

  ### Questions
  \`\`\`
  ${data.questions}
  \`\`\`

  ### GitHub Username
  \`\`\`
  ${data.github}
  \`\`\`

  ### Email
  \`\`\`
  ${data.email}
  \`\`\`

  ${renderLicenseLink(data.license)}
`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![License!](https://img.shields.io/badge/license-${license}-blue.svg "${license}")`
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== 'None')
    return `### License
    
    It is licensed with ${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license !== 'None')
    return `* [License](#license)`
}


module.exports = generateMarkdown;