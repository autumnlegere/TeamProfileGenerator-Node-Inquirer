// require all necessary dependencies
const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

// tests for Intern class
describe('Intern', () => {
    // test for function getInternName, should return name of Intern
    describe('getInternName', () => {
        it('should return the intern name', () => {
            const int = new Intern('Quinn', 11, 'testintern@test.org', 'University of Arizona');
            expect(int.getName()).toEqual(int.name);
        });
    });
    // test for function getInternId, should return Id of Intern
    describe('getInternId', () => {
        it('should return the intern id', () => {
            const int = new Intern('Quinn', 11, 'testintern@test.org', 'University of Arizona');
            expect(int.getId()).toEqual(int.id);
        });
    });
    // test for function getInternEmail, should return Email of Intern
    describe('getInternEmail', () => {
        it('should return the intern email', () => {
            const int = new Intern('Quinn', 11, 'testintern@test.org', 'University of Arizona');
            expect(int.getEmail()).toEqual(int.email);
        });
    });
    // test for function getInternSchool, should return school name of Intern
    describe('getInternSchool', () => {
        it('should return the intern school', () => {
            const int = new Intern('Quinn', 11, 'testintern@test.org', 'University of Arizona');
            expect(int.getSchool()).toEqual(int.school);
        });
    });
    // test for function getInternRole, should return Role of Intern
    describe('getInternRole', () => {
        it('should return the role of the intern', () => {
            const int = new Intern('Quinn', 11, 'testintern@test.org', 'University of Arizona');
            const intRole = 'Intern';
            expect(int.getRole()).toEqual(intRole);
        });
    });
});