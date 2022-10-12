const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should return the employee name', () => {
            const emp = new Employee('Calvin', 3, 'testemployee@test.org');
            expect(emp.getName()).toEqual(emp.name)
        })
    })
    describe('getId', () => {
        it('should return the employee id', () => {
            const emp = new Employee('Calvin', 3, 'testemployee@test.org');
            expect(emp.getId()).toEqual(emp.id)
        })
    })
    describe('getEmail', () => {
        it('should return the employee email', () => {
            const emp = new Employee('Calvin', 3, 'testemployee@test.orgg');
            expect(emp.getEmail()).toEqual(emp.email)
        })
    })
    describe('getRole', () => {
        it('should return the role of the employee', () => {
            const emp = new Employee('Calvin', 3, 'testemployee@test.org');
            const empRole = 'Employee'
            expect(emp.getRole()).toEqual(empRole)
        })
    })
})