// require all necessary dependencies
const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

// tests for Engineer class
describe('Engineer', () => {
    // test for function getEngineerName, should return name of engineer
    describe('getEngineerName', () => {
        it('should return the engineer name', () => {
            const eng = new Engineer('Autumn', 7, 'testengineer@test.org', 'bestEngineer');
            expect(eng.getName()).toEqual(eng.name);
        });
    });
    // test for function getEngineerId, should return Id of engineer
    describe('getEngineerId', () => {
        it('should return the engineer id', () => {
            const eng = new Engineer('Autumn', 7, 'testengineer@test.org', 'bestEngineer');
            expect(eng.getId()).toEqual(eng.id);
        });
    });
    // test for function getEngineerEmail, should return Email of engineer
    describe('getEngineerEmail', () => {
        it('should return the engineer email', () => {
            const eng = new Engineer('Autumn', 7, 'testengineer@test.org', 'bestEngineer');
            expect(eng.getEmail()).toEqual(eng.email);
        });
    });
    // test for function getEngineerGithub, should return Github username of engineer
    describe('getEngineerGithub', () => {
        it('should return the engineer github username', () => {
            const eng = new Engineer('Autumn', 7, 'testengineer@test.org', 'bestEngineer');
            expect(eng.getGithub()).toEqual(eng.github);
        });
    });
    // test for function getEngineerRole, should return Role of engineer
    describe('getEngineerRole', () => {
        it('should return the role of the engineer', () => {
            const eng = new Engineer('Autumn', 7, 'testengineer@test.org', 'bestEngineer');
            const engRole = 'Engineer';
            expect(eng.getRole()).toEqual(engRole);
        });
    });
});
