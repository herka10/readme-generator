const generateReadMe = (data) => {

    const {
        title, 
        what, 
        why,
        installation, 
        usage, 
        license,
        contribution, 
        test,
        username,
        email,
    } = data   
    
    return `
## ${title}

# Description
Provide a short description explaining what your project is and why you created it. 

${what}

${why}

# Table of Contents 
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)


# Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

${installation}

# Usage   
${usage}

# License
${license}

# Contributing
${contribution}

# Tests
${test}

# Questions
My GitHub Profile: ${username}
If there are additional questions, please reach me at ${email}
    `
}

module.exports = generateReadMe