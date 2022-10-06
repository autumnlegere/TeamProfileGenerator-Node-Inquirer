// The other three classes will extend `Employee`.
// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`
// add validation to ensure that user input is in the proper format
// require employee.js ✅

const Employee = require('./employee')

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }
    
    getRole() {
        return 'Manager'
    }
}


module.exports = Manager
