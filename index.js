const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?'
    },
    {
        type: 'input',
        name: 'instruction',
        message: 'What are the instruction for your project install?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What information is needed to use the project/application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is kind of license do you like to use for the project?',
        choices: ['MIT', 'Apache 2.0', 'Others', 'None']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to contribute towards project?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How users will run test on the appliation/projects?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Any questions on the project?'
    },        
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
        {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

async function init() {
    const responses = await inquirer.prompt(questions)
    const data = generateMarkdown({ ...responses })
    console.log('Generating Readme for the project.')

    writeToFile('README.md', data)

}

init()