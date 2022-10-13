// class named Employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // method to return name
    getName() {
        return this.name
    }

    // method to return id
    getId() {
        return this.id
    }

    // method to return email
    getEmail() {
        return this.email
    }

    // method to return role of Employee
    getRole() {
        return 'Employee'
    }
}

// exports class so it can be linked to other files
module.exports = Employee

