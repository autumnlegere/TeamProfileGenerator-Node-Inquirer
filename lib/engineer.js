// require all necessary dependencies
const Employee = require('./employee')

// class named Engineer, which is an extension of class Employee
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // method to return github username
    getGithub() {
        return this.github
    }

    // method to return role of Engineer
    getRole() {
        return 'Engineer'
    }

}

// exports class so it can be linked to other files
module.exports = Engineer

