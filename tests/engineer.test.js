const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('getEngineerName', () => {
        it('should return the engineer name', () => {
            const eng = new Engineer('Autumn', 7, 'testengineer@test.org', 'bestEngineer');
            expect(eng.getName()).toEqual(eng.name);
        });
    });
    describe('getEngineerId', () => {
        it('should return the engineer id', () => {
            const eng = new Engineer('Autumn', 7, 'testengineer@test.org', 'bestEngineer');
            expect(eng.getId()).toEqual(eng.id);
        });
    });
    describe('getEngineerEmail', () => {
        it('should return the engineer email', () => {
            const eng = new Engineer('Autumn', 7, 'testengineer@test.org', 'bestEngineer');
            expect(eng.getEmail()).toEqual(eng.email);
        });
    });
    describe('getEngineerGithub', () => {
        it('should return the engineer github username', () => {
            const eng = new Engineer('Autumn', 7, 'testengineer@test.org', 'bestEngineer');
            expect(eng.getGithub()).toEqual(eng.github);
        });
    });
    describe('getEngineerRole', () => {
        it('should return the role of the engineer', () => {
            const eng = new Engineer('Autumn', 7, 'testengineer@test.org', 'bestEngineer');
            const engRole = 'Engineer';
            expect(eng.getRole()).toEqual(engRole);
        });
    });
});
