// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Input name:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub username:'
    },
    {
        type: 'input',
        name: 'project',
        message: 'Project name:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description:'
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'Languages used (all that apply):',
        choices: ['JavaScript', 'HTML', 'CSS', 'Node', 'jQuery', 'Bootstrap']
    },
    {
        type: 'input',
        name: 'link',
        message: 'GitHub project link:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation steps:'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Instructions for use:'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List of contriputers:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Type of License:',
        choices: ['Apache 2.0', 'GPL', 'LGPL', 'MIT', 'MPL 2.0', 'BSD 3', 'BSD 2', 'CDDL 1.0', 'EPL 2.0', 'None']
    },
    {
        type: 'input',
        name: 'test',
        messages: 'Test instructions:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(responses => {
        writeToFile('newREADME.md', generateMarkdown({...responses}))
    })
}

// Function call to initialize app
init();
