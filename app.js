const inquirer = require('inquirer')
// const manager = require('templates/manager')
// const engineer = require('../templates/engineer')
// const intern = require('../templates/intern')

inquirer
    .prompt([
        {
            message: "what is your Name?",
            name: "name",
        },
        {
            message: "what is your email?",
            name: 'email',
        },
        {
            message: "what is your office number?",
            name: 'officeNumber'
        },
        {
            message: "what school did you attend?",
            name: 'school'
        },
        {
            message: "what is your github username?",
            name: 'username'
        },
        {
        type: 'list',
        message: "what is your occupation?",
        name: "occupation",
        choices: ['Manager', 'Engineer', 'Intern']
    },
])
    .then(answers => {
        console.log(answers)
    });

    module.exports = answers
     
     
     
     
     
     
     
     
