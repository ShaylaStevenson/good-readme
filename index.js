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
        message: 'What is the TITLE of your project?',
        default: 'Project Title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief DESCRIPTION of your project.',
        default: 'Project description'
    },
    {
        type: 'checkbox',
        name: 'tableOfContents',
        message: 'Please select which SECTIONS to include in your table of contents.',
        choices: ['Installation', 'Usage', 'Contributing', 'Tests', 'Questions', 'License'], 
    },   
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required for INSTALLATION of your project?',
        when: (data) => data.tableOfContents.indexOf('Installation') !=-1
    },
    {
        type: 'input',
        name: 'usage',
        message: 'List any instructions or examples for USAGE?',
        when: (data) => data.tableOfContents.indexOf('Usage') !=-1
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List the Github profile links of any CONTRIBUTING members.',
        when: (data) => data.tableOfContents.indexOf('Contributing') !=-1
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Include relevent TESTS.',
        when: (data) => data.tableOfContents.indexOf('Tests') !=-1
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your GITHUB USERNAME',
        when: (data) => data.tableOfContents.indexOf('Questions') !=-1
    },
    {
        type: 'input',
        name: 'githubURL',
        message: 'What is your GITHUB PROFILE LINK?',
        when: (data) => data.tableOfContents.indexOf('Questions') !=-1
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your professional EMAIL?',
        when: (data) => data.tableOfContents.indexOf('Questions') !=-1
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Include special instructions or additional ways for people to ask QUESTIONS.',
        when: (data) => data.tableOfContents.indexOf('Questions') !=-1
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose one LICENSE for project',
        choices: ['MIT', 'Apache-2.0', 'BSD-2-clause'],
        when: (data) => data.tableOfContents.indexOf('License') !=-1
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

