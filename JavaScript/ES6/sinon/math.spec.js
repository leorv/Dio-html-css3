// Existe uma ferramente muito poderosa quando precisamos mocar funções,
// mocar métodos, APIs, etc.
// É o Sinon.
// comando: npm i --save-dev sinon


const assert = require('assert');
const { isTypedArray } = require('util/types');
const Math = require('./math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

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
            expect(value).to.equal(10);
            done();
        });
    });

    it('Multiply two numbers', function() {
        const math = new Math();

        expect(math.multiply(value, 5)).to.equal(0);
    });

    it.only('Calls req with sum and index values', function() {
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);
        
        // Criamos um método espião que vai ver se a função foi chamada ou não.
        expect(res.load.calledOnce).to.be.true;

        // Outros exemplos:
        // expect(res.load.args[0][0]).to.equal('index');
        // expect(res.load.args[0][1]).to.equal(10);

        // Para adicionar o spy em uma função já existente:
        // sinon.spy(res, 'load');

        // Outro método interessante do sinon é o stub.

    })
});

// Mais em: https://www.chaijs.com/api/bdd