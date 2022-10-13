// require all necessary dependencies
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

// tests for Manager class
describe('Manager', () => {
    // test for function getManagerName, should return name of Manager
    describe('getManagerName', () => {
        it('should return the manager name', () => {
            const mgr = new Manager('Koda', 15, 'testmanager@test.org', '104');
            expect(mgr.getName()).toEqual(mgr.name);
        });
    });
    // test for function getManagerId, should return Id of Manager
    describe('getManagerId', () => {
        it('should return the manager id', () => {
            const mgr = new Manager('Koda', 15, 'testmanager@test.org', '104');
            expect(mgr.getId()).toEqual(mgr.id);
        });
    });
    // test for function getManagerEmail, should return Email of Manager
    describe('getManagerEmail', () => {
        it('should return the manager email', () => {
            const mgr = new Manager('Koda', 15, 'testmanager@test.org', '104');
            expect(mgr.getEmail()).toEqual(mgr.email);
        });
    });
    // test for function getManagerOfficeNumber, should return Office Number of Manager
    describe('getManagerOfficeNumber', () => {
        it('should return the manager office number', () => {
            const mgr = new Manager('Koda', 15, 'testmanager@test.org', '104');
            expect(mgr.getOfficeNumber()).toEqual(mgr.officeNumber);
        });
    });
    // test for function getManagerRole, should return Role of Manager
    describe('getManagerRole', () => {
        it('should return the role of the manager', () => {
            const mgr = new Manager('Koda', 15, 'testmanager@test.org', '104');
            const mgrRole = 'Manager';
            expect(mgr.getRole()).toEqual(mgrRole);
        });
    });
});