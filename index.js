// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = (data) =>
    inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the TITLE of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief DESCRIPTION of your project.',
        
    },
    {
        type: 'checkbox',
        name: 'tableOfContents',
        message: 'Please select which SECTIONS to include in your table of contents.',
        choices: ['Installation', 'Usage', 'Contributing', 'Tests', 'License', 'Questions',],
        
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required for INSTALLATION of your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'List any instructions or examples for USAGE?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List the Github URL(s) of any CONTRIBUTING members.',

    },
    {
        type: 'input',
        name: 'tests',
        message: 'Include relevent TESTS.'

    },
    {
        type: 'input',
        name: 'questions',
        message: 'How can people get in touch to ask QUESTIONS?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose one LICENSE for project',
        choices: ['MIT', 'Apache-2.0', 'BSD-2-clause']
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
const init = () => {
        questions().then((data) => {
            try {
                const markdown = generateMarkdown(data);
                fs.writeFileSync('README.md', markdown);
                console.log("SUCCESS!");
            } catch (error) {
                console.log(error);
            }
        });
        
    };
    

// Function call to initialize app
init();

//////////////////////////////////////////

