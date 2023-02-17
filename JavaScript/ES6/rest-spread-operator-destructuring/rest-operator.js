// Consideremos uma função de soma simples
function sum(a, b) {
    return a + b;
}

// Mas e se quiséssemos que a função funcionasse com um número indefinido de argumentos?
// O jeito antigo seria: utilizando a palavra reservada arguments.
function sum(a, b) {
    var value = 0;

    for (var i = 0; arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}
// Mas essa última solução pode apresentar um problema de legibilidade para qualquer pessoa que for pegar nosso código.
// No ECMA6 temos um operador que pode nos auxiliar, o rest operator.

// rest operator ... (dentro da lista de argumentos)
function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
};

// Um detalhe interessante, é que a lista de arguments é inexistente no caso de arrow functions.
const sum = () => {
    console.log(arguments); // Isso não dá certo.
};
// Trabalhando com arrow functions, temos que utilizar o rest operator para trabalhar com os argumentos.
const sum = (...args) => {
    console.log(args);
};

// Podemos também utilizar o rest operator para pegar parâmetros restantes.
const sum = (a, b, ...args) => {
    console.log(a, b, args);
};

// Vamos supor essa função:
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
// Vamos supor que queiramos passar os argumentos da função soma para a função de multiplicação.
// Era muito comum fazermos:
const sum = (a, b, ...args) => {
    return multiply.apply(undefined, args);
}
// O problema é que o código não fica muito descritivo.
// Então pra isso podemos usar o spread operator, que se escreve da mesma forma que o rest operator.
// Porém, seu funcionamento é diferente, enquanto o rest operator transforma todos os parâmetros
// da função em um array, o spread operator transforma o array em parâmetros pra função.
const sum = (...rest) => {
    return multiply(...rest);
}
// O spread operator não se limita a listas
// Também funciona em strings, arrays, objetos e objetos iteráveis.
// Ele quebra os itens e repassa pra algum lugar.
const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}
logArgs(...str); // Aqui. A string vai ser quebrada em caracteres e jogada em uma lista.

// Também funciona da seguinte forma:
function logArgs() {
    console.log(arguments);
}
logArgs(...str);

// Para combinar arrays, uma forma muito comum era utilizar o concat:
const arr = [1, 2, 3, 4];
const arr2 = [5,6,7].concat(arr);
// Poderíamosusar o spread operator
const arr2 = [5,6,7,...arr];

// Com objetos
const obj = {
    test: 123
}
const obj2 = {
    ...obj
}
// Só podemos usar o spread operator para construir novos objetos.
// Não podemos fazer um spread no objeto para construir o array:
const arr = {...obj}; // Erro: objeto não é iterável.

// Muitos usam o spread operator para clonar objetos, chamados também de shalow clone, clones rasos.
const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};

const obj2 = { ...obj };

obj2.subObj.test = 456;
console.log(obj);
// Muito cuidado, porque aqui ele altera a propriedade do primeiro objeto também, por questão de referência.
// Para que tenha o comportamento esperado:
const obj2 = { ...obj, subObj: { ...obj.subObj } };

obj2.subObj.test = 456;
console.log(obj);