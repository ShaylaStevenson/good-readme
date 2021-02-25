// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input
const questions = (data) =>
    inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        default: 'Project Title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project.',
        default: 'Project description'
    },
    {
        type: 'checkbox',
        name: 'tableOfContents',
        message: 'Please choose which sections to include in your readme.',
        choices: ['Installation', 'Usage', 'Contributing', 'Tests', 'Questions', 'License'], 
    },   
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required for installation of your project?',
        when: (data) => data.tableOfContents.indexOf('Installation') !=-1
    },
    {
        type: 'input',
        name: 'usage',
        message: 'List any instructions or examples for usage?',
        when: (data) => data.tableOfContents.indexOf('Usage') !=-1
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List the Github profile links of any contributing members.',
        when: (data) => data.tableOfContents.indexOf('Contributing') !=-1
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Include relevent tests.',
        when: (data) => data.tableOfContents.indexOf('Tests') !=-1
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your Github username',
        when: (data) => data.tableOfContents.indexOf('Questions') !=-1
    },
    {
        type: 'input',
        name: 'githubURL',
        message: 'What is your Github profile link?',
        when: (data) => data.tableOfContents.indexOf('Questions') !=-1
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your professional email?',
        when: (data) => data.tableOfContents.indexOf('Questions') !=-1
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Include special instructions or additional ways for people to reach out.',
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

// function to initialize app
const init = () => {
        questions().then((data) => {
            try {
                const markdown = generateMarkdown(data);
                fs.writeFileSync('README.md', markdown);
                console.log("Successfully created README.md");
            } catch (error) {
                console.log(error);
            }
        });
    };
    

// function call to initialize app
init();