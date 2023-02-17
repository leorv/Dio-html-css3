// comando: npm i --save-dev chai
// Como ficaria usando o chai:

const assert = require('assert');
const { isTypedArray } = require('util/types');
const Math = require('./math.js');

const expect = require('chai').expect;

let value = 0;

describe('Math Class', function() {
    // hooks
    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000); // O máximo que o mocha espera por padrão é 2000ms. Aqui mudamos isso.

        value = 5;

        math.sum(value, 5, value => {
            expect(value).to.equal(10); // Aqui. Mais legível do que antes.
            done();
        });
    });

    it('Multiply two numbers', function() {
        const math = new Math();

        expect(math.multiply(value, 5)).to.equal(0); // Aqui também.
    })
});

// Mais em: https://www.chaijs.com/api/bdd