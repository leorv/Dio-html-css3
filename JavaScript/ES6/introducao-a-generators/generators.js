// Generators são funções com pausa.
function hello() {
    console.log('Hello');
    console.log('from');
    console.log('function!');
}
// Na função acima não temos pausa, e se fossemos colocar, poderia consumir muita memória
// teríamos que criar uma lógica pra isso.

// Com o generator conseguimos:
function* hello() {
    console.log('Hello');
    yield;
    console.log('from');
    yield;
    console.log('function!');
}

const gen = hello();
console.log(gen.next()); // Hello
console.log(gen.next()); // from
console.log(gen.next()); // function!

// O value está vindo como undefined, para retornarmos algum valor para ele,
// vamos colocar 1, 2, etc.
function* hello() {
    console.log('Hello');
    yield 1;
    console.log('from');
    yield 2;
    console.log('function!');
}

// Posso também passar valores para o yield.
function* hello() {
    console.log('Hello');
    yield 1;
    console.log('from');
    const value = yield 2;
    console.log(value);
}

const gen = hello();
console.log(gen.next()); // Hello
console.log(gen.next()); // from
console.log(gen.next('Outside!')); // Outside!

// Uma outra forma interessante de percorrer os iteradores
function* naturalNumbers() {
    let number = 0;
    while (true){
        yield number;
        number++;
    }
}
const numbers = naturalNumbers();

console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());

// Métodos generators
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
}

for (let value of obj){
    console.log(value);
}