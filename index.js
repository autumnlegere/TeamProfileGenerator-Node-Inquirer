// require all necessary files and npm's
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')

// empty arrays to be filled with team data
teamMembers = [];
teamEngineers = [];
teamInterns = [];


// initial questions in command line prompt about manager
const startQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Please enter the team manager's name.",
    },
    {
        type: 'input',
        name: 'managerId',
        message: "Please enter the team manager's employee ID.",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Please enter the team manager's email address.",
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "Please enter the team manager's office number.",
    },
]


// prompt questions about engineer
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "Please enter the engineer's name.",
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "Please enter the engineer's employee ID.",
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "Please enter the engineer's email address.",
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "Please enter the engineer's Github username.",
    },
]

// prompt questions about intern
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "Please enter the intern's name.",
    },
    {
        type: 'input',
        name: 'internId',
        message: "Please enter the intern's employee ID.",
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "Please enter the intern's email address.",
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "Please enter the intern's school name.",
    },
]


// menu question; comes after the end of each other set of questions
const menuQuestion = [
    {
        type: 'list',
        name: 'menu',
        message: "Please select one of the following options:",
        choices: [
            "Add an engineer to the team.",
            "Add an intern to the team",
            "My team is finished",
        ]
    },
]

// function to generate content of new html
function generateHTML(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <header class="jumbotron">
        <h1 class="text-center">My Team</h1>
    </header>
    <div class="d-flex row text-center justify-content-center" id="teamInfoHere">
        <div class="card col-3 m-1">
            <h2>${data[0].getName()}</h2>
            <h3>${data[0].getRole()}</h3>
            <p class="list-group-item">ID: ${data[0].getId()}</p>
            <p class="list-group-item">Email: <a href = "mailto: ${data[0].getEmail()}" target="_blank" rel="noopener noreferrer">${data[0].getEmail()}</a></p>
            <p class="list-group-item">Office Number: ${data[0].getOfficeNumber()}</p>
        </div>
        ${printEngineer(teamEngineers)}     
        ${printIntern(teamInterns)}     
    </div>

</body>
</html>
`;
}

// function to display manager questions, use data to create to instance of Manager class, push instance into array, and then display menu options
function createManager() {
    inquirer.prompt(startQuestions).then((response) => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)
        teamMembers.push(manager);
        menuOptions();
    })
}

// function to display engineer questions, use data to create to instance of Engineer class, push instance into array, and then display menu options
function createEngineer() {
    inquirer.prompt(engineerQuestions).then((response) => {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
        teamEngineers.push(engineer);
        menuOptions();
    });
}

// function to display intern questions, use data to create to instance of Intern class, push instance into array, and then display menu options
function createIntern() {
    inquirer.prompt(internQuestions).then((response) => {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
        teamInterns.push(intern);
        menuOptions();
    });
}

// function to display menu options, and either show engineer questions, intern questions, or end command line prompts
function menuOptions() {
    inquirer.prompt(menuQuestion).then((response) => {
        if (response.menu === "Add an engineer to the team.") {
            createEngineer();
        } else if (response.menu === "Add an intern to the team") {
            createIntern();
        } else {
            console.log('You team profile is complete!')
            writeHTML(teamMembers);
        };
    });
};

// function to create new html file
function writeHTML(data) {
    fs.writeFile('./dist/index.html', generateHTML(data),  (err) =>
    err ? console.log(err) : console.log('Success!'))
}

// function to organize data from instances of new Engineer into html format to be displayed
function printEngineer(engineers) {
    return engineers.map(function (engineer) {
        return `   
        <div class="card col-3 m-1"> 
        <h2>${engineer.getName()}</h2>
        <h3>${engineer.getRole()}</h3>
        <p class="list-group-item">ID: ${engineer.getId()}</p>
        <p class="list-group-item">Email: <a href = "mailto: ${engineer.getEmail()}" target="_blank" rel="noopener noreferrer">${engineer.getEmail()}</a></p>
        <p class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></p>
        </div> 
        `;
    }).join('')
}

// function to organize data from instances of new Intern into html format to be displayed
function printIntern(interns) {
    return interns.map(function (intern) {
        return `   
        <div class="card col-3 m-1"> 
        <h2>${intern.getName()}</h2>
        <h3>${intern.getRole()}</h3>
        <p class="list-group-item">ID: ${intern.getId()}</p>
        <p class="list-group-item">Email: <a href = "mailto: ${intern.getEmail()}" target="_blank" rel="noopener noreferrer">${intern.getEmail()}</a></p>
        <p class="list-group-item">School: ${intern.getSchool()}</p>
        </div> 
        `;
    }).join('')
};

// call function to start command line prompts
createManager()