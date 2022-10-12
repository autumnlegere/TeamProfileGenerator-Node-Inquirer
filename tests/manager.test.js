const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('getManagerName', () => {
        it('should return the manager name', () => {
            const mgr = new Manager('Koda', 15, 'testmanager@test.org', '104');
            expect(mgr.getName()).toEqual(mgr.name);
        });
    });
    describe('getManagerId', () => {
        it('should return the manager id', () => {
            const mgr = new Manager('Koda', 15, 'testmanager@test.org', '104');
            expect(mgr.getId()).toEqual(mgr.id);
        });
    });
    describe('getManagerEmail', () => {
        it('should return the manager email', () => {
            const mgr = new Manager('Koda', 15, 'testmanager@test.org', '104');
            expect(mgr.getEmail()).toEqual(mgr.email);
        });
    });
    describe('getManagerOfficeNumber', () => {
        it('should return the manager office number', () => {
            const mgr = new Manager('Koda', 15, 'testmanager@test.org', '104');
            expect(mgr.getOfficeNumber()).toEqual(mgr.officeNumber);
        });
    });
    describe('getManagerRole', () => {
        it('should return the role of the manager', () => {
            const mgr = new Manager('Koda', 15, 'testmanager@test.org', '104');
            const mgrRole = 'Manager';
            expect(mgr.getRole()).toEqual(mgrRole);
        });
    });
});