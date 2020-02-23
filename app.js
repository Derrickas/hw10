const inquirer = require('./inquirer')
const manager = require('./templates/manager')
const engineer = require('./templates/engineer')
const intern = require('./templates/intern')


function init() {
    inquirer
    .prompt([{
        message: "what is your occupation?",
        name: "occupation",
        choices: ['Manager', 'Engineer', 'Intern']
    }])
    .then(answers => {

    switch(answers) {
        case "Manager": inquirer
        .prompt([{
            message: "what is your office Number?",
            name: "officeNumber"

    }])

         case "Engineer": inquirer
         .prompt([{
             message: 'what is your github?',
             name: "github"
         }])

         case "Intern": inquirer
         .prompt([{
             message: 'where did you go to school?',
             name: "school"
         }])
    }
    
    }
     
     
     
     
     
     
     
     
     
     message: 'What is your employees name?'
        name:'name'
    ]
    })
}
inquirer.prompt(questions)