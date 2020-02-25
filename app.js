const inquirer = require('inquirer')
const fs = require('fs')
// const manager = require('templates/manager')
// const engineer = require('../templates/engineer')
// const intern = require('../templates/intern')

inquirer
    .prompt([{
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
        var htmlBody = ''
        if (answers.occupation === 'Manager') {
          console.log('manager')
            htmlBody = generateMangerHTML(answers)
          console.log(htmlBody)   
           }

        else if (answers.occupation === 'Engineer') {
            console.log('Engineer')
            htmlBody = generateEngineerHTML(answers)
            console.log(htmlBody)
        }
        else if (answers.occupation === 'Intern') {
            console.log('Intern')
            htmlBody = generateInternHTML(answers) 
        }console.log(htmlBody)

            var fullpage = 
                generateHTML(htmlBody)
            console.log(fullpage)
            let main = fs.appendFileSync('./main.html', fullpage )
            console.log('appendfile')

        // if( htmlBody === true)
        //     fs.appendFileSync('./main.html', htmlBody )


    })

function generateHTML(htmlBody) {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Index</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <style>
        
            .header {
                background: red;
                width: 100%;
                height: auto;
            }
            .title {
                color: white;
            }
        </style>
        </head>
        <body>
            <div class="header">
                <div class="d-flex justify-content-center">
                <h1 class="title">Team Builder</h1> 
                </div> 
            </div>
            ${htmlBody}
        </body>
        </html>`
}
function generateMangerHTML(answers) {
    return `
<style>
.topper {
    background: red;
    margin-top: 25px;
}
</style>
    <div class="container">
    <div class="card" style="width: 18rem;">
        <div class="card-body topper">
            <h1 class = 'name'>${answers.name}</h1>
            <div>
                <h2 class = "occupation">${answers.occupation}</h2>
                <i class="fas fa-mug-hot"></i>
            </div>
        </div>
        <div class="card-body">
        <h5 class = "occupation">${answers.email}</h5>
        <h5 class = "occupation">${answers.officeNumber}</h5>
         </div>
  </div>
  </div>
    `
}
function generateEngineerHTML(answers) {
    return `
<style>
.topper {
    background: red;
}
</style>
 <div class="container">
    <div class="card" style="width: 18rem;">
        <div class="card-body topper">
            <h1 class = 'name'>${answers.name}</h1>
            <div>
                <h2 class = "occupation">${answers.occupation}</h2>
                <i class="fas fa-mug-hot"></i>
            </div>
            
        </div>
    
                
        <div class="card-body">
        <h5 class = "occupation">${answers.email}</h5>
        <h5 class = "occupation">${answers.username}</h5>
         </div>
  </div>
</div>`
}
function generateInternHTML(answers) {
    return `
<style>
.topper {
    background: red;
}
</style>

<div class="container">
    <div class="card" style="width: 18rem;">
        <div class="card-body topper">
            <h1 class = 'name'>${answers.name}</h1>
            <div>
                <h2 class = "occupation">${answers.occupation}</h2>
                <i class="fas fa-mug-hot"></i>
            </div>
            
        </div>
    
                
        <div class="card-body">
        <h5 class = "occupation">${answers.email}</h5>
        <h5 class = "occupation">${answers.school}</h5>
         </div>
  </div>
  </div>`
}
