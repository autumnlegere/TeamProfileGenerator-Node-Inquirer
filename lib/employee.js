// The first class is an `Employee` parent class with the following properties and methods:
// * `name`
// * `id`
// * `email`

// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`
// add validation to ensure that user input is in the proper format
// export file so class can be extended ✅

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee

