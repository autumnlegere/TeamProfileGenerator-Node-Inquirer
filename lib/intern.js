// require all necessary dependencies
const Employee = require('./employee')

// class named Intern, which is an extension of class Employee
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // method to return intern school
    getSchool() {
        return this.school
    }

    // method to return role of Intern
    getRole() {
        return 'Intern'
    }

}


// exports class so it can be linked to other files
module.exports = Intern

