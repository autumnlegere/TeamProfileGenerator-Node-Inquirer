// The other three classes will extend `Employee`.
// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`
// add validation to ensure that user input is in the proper format
// require employee.js ✅

const Employee = require('./employee')

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }

}


module.exports = Intern

