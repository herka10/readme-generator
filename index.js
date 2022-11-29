// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile('log.txt', process.argv[2], (err) =>
        //   err ? console.error(err) : console.log('Success!')
        // );
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
                message: 'What is the description of this ReadMe?',
                name: 'description',
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
                type: 'input',
                message: 'What are the contribution guidelines of this ReadMe?',
                name: 'contribution',
            },
            {
                type: 'input',
                message: 'What are the test instructions of this ReadMe?',
                name: 'test',
            },
        ])
        .then((answers) => {
            // Use user feedback for... whatever!!
            // writeToFile(fileName, data)
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
