const Employee = require('../lib/employee')

describe('Employee', () => {
    describe('getName', () => {
        it('should return the employee name', () => {
            const emp = new Employee('Calvin', 3, 'none@none.org');
            console.group(emp.getName())
            expect(emp.getName()).toEqual(emp.name)
        })
    })
})


// class Employee {
//     constructor(name, id, email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }

//     getName() {
//         return this.name
//     }

//     getId() {
//         return this.id
//     }

//     getEmail() {
//         return this.email
//     }

//     getRole() {
//         return 'Employee'
//     }
// }
