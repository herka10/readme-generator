// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require('./generateReadMe')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');

// fs is a Node standard library package for reading and writing files

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile('log.txt', process.argv[2], (err) =>
    //     err ? console.error(err) : console.log('Success!')
    //     );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: 'input',
                message: 'What is the title of this ReadMe?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Provide a short description explaining what your project is.',
                name: 'what',
            },
            {
                type: 'input',
                message: 'Provide a short description explaining why you created this project.',
                name: 'why',
            },
            {
                type: 'input',
                message: 'What are the installation instructions for this ReadMe?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'What usage information would you like to include in this ReadMe?',
                name: 'usage',
            },
            {
                type: 'list',
                message: 'Which of the following licenses describes your situation?',
                choices: ['Need to work in a community - Apache License 2.0', 'Simple and permissive - MIT License', 'Care about sharing improvements - GNU General Public License v3.0'],
                name: 'license',
            },
            {
                type: 'input',
                message: 'What are the contribution guidelines of this ReadMe?',
                name: 'contribution',
            },
            {
                type: 'input',
                message: 'What are the test instructions of this ReadMe?',
                name: 'test',
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'username',
            },
            {
                type: 'input',
                message: 'Please enter an email address for contact purposes',
                name: 'email',
            },
            
        ])
        .then((answers) => {
            // Use user feedback for... whatever!!
            // writeToFile(fileName, data)
            const html = generateReadMe(answers)
            console.log(html)

            fs.writeFile('./readme.md', html, error => {
                if (error) throw error
                console.log('ReadMe saved!')
            })
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
        });
}

// Function call to initialize app
init();

