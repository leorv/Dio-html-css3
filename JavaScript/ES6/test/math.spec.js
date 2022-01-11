// Testes com mocha.
// npm run test
// Podemos usar também it.only, it.skip...

const assert = require('assert');
const { isTypedArray } = require('util/types');
const Math = require('./math.js');

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
            assert.equal(value, 10);
            done();
        });
    });

    it('Multiply two numbers', function() {
        const math = new Math();

        assert.equal(math.multiply(value, 5), 25);
    })
});