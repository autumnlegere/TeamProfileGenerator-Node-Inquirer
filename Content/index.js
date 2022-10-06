// Need:
// jest for running tests ✅
// gitignore that does not include dist❓

// To Do:
// generates html
// create tests for each part of code
// walkthrough video
// email address link with auto populated 'to'
// github username links to github and opens in new tab
// manager name, id, email, office #
// after manager, menu for adding engineer or intern or finish team
// engineer name, ID, email, and GitHub username, return to menu
// intern name, ID, email, and school, return to menu
// finish team generates html

// index.js should run the application
// this means we need to export all other files and require them here ✅
// require inquirer and fs ✅



/*
Pseudocode:
    In order to set up the command line prompts I will need:        
        function for printing html content
        iterate through results and print to dom
        save each result separately and access it as object or array or something
*/


const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')

teamMembers = [];

function generateHTML(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" src="style.css">
    <title>Document</title>
</head>
<body>
    <header class="jumbotron">
        <h1 class="text-center">My Team</h1>
    </header>
    <div class="d-flex row text-center justify-content-center" id="teamInfoHere">
        <div class="card col-3 m-1">
            <h2>${manager.getName}</h2>
            <h2>${manager.getRole}</h2>
            <p>ID: ${manager.getId}</p>
            <p><a href = "mailto: ${manager.getEmail}">${manager.getEmail}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>
        </div>
        <div class="card col-3 m-1">            
            <h2>Name</h2>
            <h2>Title</h2>
            <p>ID:</p>
            <p>Email:</p>
            <p>Github: <a href="https://github.com/${engineer.getGithub}" target="_blank" rel="noopener noreferrer">${engineer.getGithub}</a>.</p>
        <div class="card col-3 m-1">
            <h2>Name</h2>
            <h2>Title</h2>
            <p>ID:</p>
            <p>Email:</p>
            <p>Github:</p>
        </div>
        <div class="card col-3 m-1">
            <h2>Name</h2>
            <h2>Title</h2>
            <p>ID:</p>
            <p>Email:</p>
            <p>Github:</p>
        </div>
        <div class="card col-3 m-1">
            <h2>Name</h2>
            <h2>Title</h2>
            <p>ID:</p>
            <p>Email:</p>
            <p>Github:</p>
        </div>
    </div>

    
</body>
</html>
`;
}

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

// function to display manager questions, use data to create to instance of Manager class, and then display menu options
function createManager() {
    inquirer.prompt(startQuestions).then((response) => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)
        teamMembers.push(manager);
        menuOptions();
    })
}

// function to display engineer questions, use data to create to instance of Engineer class, and then display menu options
function createEngineer() {
    inquirer.prompt(engineerQuestions).then((response) => {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
        teamMembers.push(engineer);
        menuOptions();
    });
}

// function to display intern questions, use data to create to instance of Intern class, and then display menu options
function createIntern() {
    inquirer.prompt(internQuestions).then((response) => {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
        teamMembers.push(intern);
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
            // console.log(teamMembers)
            printTeam();

        };
    });
};


function printTeam() {
    teamMembers.map(function (data) {
        console.log(data);
    })
}

// call function to start command line prompts
createManager()