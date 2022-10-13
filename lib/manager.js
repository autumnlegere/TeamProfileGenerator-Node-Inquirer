// require all necessary dependencies
const Employee = require('./employee')

// class named Manager, which is an extension of class Employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // method to return manager office number
    getOfficeNumber() {
        return this.officeNumber
    }
    
    // method to return role of Manager
    getRole() {
        return 'Manager'
    }
}


// exports class so it can be linked to other files
module.exports = Manager
