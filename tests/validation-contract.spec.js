(() => {
    'use strict'

    const expect = require('chai').expect;
    const contract = require('../validation-contract.js');

    describe('Fluent Validator', () => {
        describe('"Is Required"', () => {
            it('should return an error when value is invalid', async () => {
                await contract.clear();
                await contract.isRequired('', 'This field is required');
                expect(contract.errors.length).equal(1);
            });

            it('should return no errors when value is valid', async () => {
                await contract.clear();                
                await contract.isRequired('Some value', 'This field is required');
                expect(contract.errors.length).equal(0);
            });
        });
    });
})();