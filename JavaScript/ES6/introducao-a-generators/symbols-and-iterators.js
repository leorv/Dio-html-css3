// Symbols, é uma maneira de gerar um identificador único.
// É um identificador único que não pode ser adivinhado ou descrito.
const uniqueId = Symbol();

// Pode passar um valor para o Symbol.
// Este valor serve única e exclusivamente para debug.
// Ele não está ligado ao seu valor de fato.
const uniqueId2 = Symbol('Hello');
const uniqueId3 = Symbol('Hello');

// Podemos criar propriedades
const obj = {
    [uniqueId]: 'Hello'
}

// Os symbols possuem uma série de propriedades chamadas de well known symbols
// Por exemplo, um iterator.
// Um array e uma string também tem essa propriedade.
const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

console.log(it.next());

while (true) {
    let { value, done } = it.next();

    console.log(value);

    if (done) {
        break;
    }
}

// Com o ECMA6 surgiu uma forma melhor de fazer o iterador, com o for of.
for (let value of arr) {
    console.log(value);
}

// Vamos contruir uma função iteradora num objeto
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}
const it = obj[Symbol.iterator]();

console.log(it.next());

// Dessa maneira, nosso objeto se tornou iterável, posso então fazer um for of nele.
for (let value of obj){
    console.log(value);
}

// Posso também fazer um spread nele.
const arr2 = [...obj];

console.log(arr2);