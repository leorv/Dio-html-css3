// Maneira clássica de escrever objetos literais.
var obj = {
    prop1: 'Digital Innovation One'
};

// Outra maneira, referenciando uma variável:
var prop1 = 'Digital Innovation One';

var obj = {
    prop1: prop1
}
// Acabamos repetindo duas vezes a palavra, porém, com o ECMA6 foi introduzido um short hand pra isso.
var obj = {
    prop1 // Definimos os valores sem repetir a palavra.
}

// funciona também com métodos.
function method1() {
    console.log('Digital Innovation One');
}
var obj = {
    method1
}

// outra maneira de criar uma função: diretamente no objeto.
var obj = {
    sum: function sum(a, b) {
        return a + b;
    }
}
// pode ser uma função anônima também.
var obj = {
    sum: function(a, b) {
        return a + b;
    }
}
// o ECMA6 trouxe também uma outra capacidade de encurtar:
var obj = {
    sum(a, b) {
        return a + b;
    }
}

// Forma de atribuir uma propriedade a um objeto
// Antigamente era assim:
var propName = 'test';

var obj = {};
obj[propName] = 'prop value';
// O problema aqui é que temos que declarar o objeto antes e fazer a definição posteriormente.
// Com o ECMA6, podemos fazer isso direto:
var propName = 'test';

var obj = {
    [propName]: 'prop value'
};