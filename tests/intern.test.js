const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('getInternName', () => {
        it('should return the intern name', () => {
            const int = new Intern('Quinn', 11, 'testintern@test.org', 'University of Arizona');
            expect(int.getName()).toEqual(int.name);
        });
    });
    describe('getInternId', () => {
        it('should return the intern id', () => {
            const int = new Intern('Quinn', 11, 'testintern@test.org', 'University of Arizona');
            expect(int.getId()).toEqual(int.id);
        });
    });
    describe('getInternEmail', () => {
        it('should return the intern email', () => {
            const int = new Intern('Quinn', 11, 'testintern@test.org', 'University of Arizona');
            expect(int.getEmail()).toEqual(int.email);
        });
    });
    describe('getInternSchool', () => {
        it('should return the intern school', () => {
            const int = new Intern('Quinn', 11, 'testintern@test.org', 'University of Arizona');
            expect(int.getSchool()).toEqual(int.school);
        });
    });
    describe('getInternRole', () => {
        it('should return the role of the intern', () => {
            const int = new Intern('Quinn', 11, 'testintern@test.org', 'University of Arizona');
            const intRole = 'Intern';
            expect(int.getRole()).toEqual(intRole);
        });
    });
});