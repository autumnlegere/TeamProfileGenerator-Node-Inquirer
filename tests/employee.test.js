// require all necessary dependencies
const Employee = require('../lib/employee');

// tests for Employee class
describe('Employee', () => {
    // test for function getName, should return name of employee
    describe('getName', () => {
        it('should return the employee name', () => {
            const emp = new Employee('Calvin', 3, 'testemployee@test.org');
            expect(emp.getName()).toEqual(emp.name)
        })
    })
    // test for function getId, should return Id of employee
    describe('getId', () => {
        it('should return the employee id', () => {
            const emp = new Employee('Calvin', 3, 'testemployee@test.org');
            expect(emp.getId()).toEqual(emp.id)
        })
    })
    // test for function getEmail, should return Email of employee
    describe('getEmail', () => {
        it('should return the employee email', () => {
            const emp = new Employee('Calvin', 3, 'testemployee@test.orgg');
            expect(emp.getEmail()).toEqual(emp.email)
        })
    })
    // test for function getRole, should return Role of employee
    describe('getRole', () => {
        it('should return the role of the employee', () => {
            const emp = new Employee('Calvin', 3, 'testemployee@test.org');
            const empRole = 'Employee'
            expect(emp.getRole()).toEqual(empRole)
        })
    })
})