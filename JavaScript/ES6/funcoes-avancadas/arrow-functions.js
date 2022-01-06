// Funções tradicionais do javascript:
function log(value){
    console.log(value);
}
log('test');

// Funções anônimas: Devem estar atribuidas ou a uma variável, ou passada como parâmetro para outra função.
var log = function(value) {
    console.log(value);
}
log('test');

// Retornando algo:
var soma = function(a, b) {
    return a + b;
}
console.log(soma(5, 5));

// No ECMA6, a nova forma: Arrow functions. =>
// São funções anônimas.
var sum = (a, b) => a + b; // Neste caso, diferente da primeira função, podemos omitir o return no caso do lado direito ser apenas uma expressão.
console.log(sum(5, 5));

// Porém, para criar statements, definir variáveis, fazer condicionais, etc. deve-se usar {};
var sum = (a, b) => {
    var x = 10;
    if (a > b){

    }
    return a + b;
}

// Outras formas de escrever Arrow functions:
var sum = a => a + b; // Com apenas um argumento no lado esquerdo. Pode-se omitir os parênteses.
var sum = (...a) => a; // Com rest operator.
var sum = (a = 5) => a; // Default values.

// Objetos literais são declarados da seguinte forma:
var obj = {
    test: '1234'
}
// Retornando objetos:
var createObj = () => ({ test: '123' });
console.log(createObj());
// Funções construtoras:
function Car() {
    this.foo = 'bar'
}

console.log(new Car());
// Não se pode fazer o mesmo acima utiliando arrow functions.
var Car = () => { // Isso não funciona. Error: Car não é um construtor. Contexto do this.
    this.foo = 'bar'
}

// Arrow functions não possuem as características de hoisting.

// Uma característica interessante:
var obj = {
    showContext: function showContext() {
        console.log(this); // Aqui o this referencia o próprio objeto.
    },
    log: function log(value) {
        console.log(value);
    }
};
// Neste caso poderíamos também chamar o método log, da seguinte maneira:
var obj = {
    showContext: function showContext() {
        this.log('test');
    },
    log: function log(value) {
        console.log(value);
    }
};
// Já o abaixo não funciona. Pela questão do escopo da função. Do this.
var obj = {
    showContext: function showContext() {
        this.log('test');

        setTimeout(function() {
            this.log('after 1000ms'); // Aqui, esse this não funciona, pelo contexto dela. Time, callback, eventlistener, são invocadas em um contexto global.
            // Se fizer um console log this, verá que o contexto é window.
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};
// Para resolver isso, utilizar o bind ou aply
var obj = {
    showContext: function showContext() {
        this.log('test');

        setTimeout(function() {
            this.log('after 1000ms');
        }.bind(this), // Aqui eu fixo o contexto da função, independente da onde ela for invocada.
         1000);
    },
    log: function log(value) {
        console.log(value);
    }
};
// Mas o bind é meio verboso e a qualquer momento podemos esquecer de colocá-lo.
// Outra forma comum de resolver: armazenar o contexto em uma variável chamada that ou self.
// Dessa forma funciona, porém não é muito legal hoje em dia. Acaba deixando poluído o código.
var obj = {
    showContext: function showContext() {
        var _that = this;

        this.log('test');

        setTimeout(function() {
            _that.log('after 1000ms'); // Aqui conseguimos salvar o contexto e usar.
        },
         1000);
    },
    log: function log(value) {
        console.log(value);
    }
};
// Arrow functions resolve esse problema.
// Arrow functions tem o contexto igual o código que envolve ele.
// O this da arrow function referencia as chaves que o envolvem, chamado também de contexto léxico.
var obj = {
    showContext: function showContext() {
        this.log('test');

        setTimeout(() => {
            this.log('after 1000ms'); // this = obj
        },
         1000);
    },
    log: function log(value) {
        console.log(value);
    }
};