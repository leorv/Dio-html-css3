// Atribuindo variável através de um array, modo que era feito comumente:
var arr = ['Apple', 'Banana', 'Orange'];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

// Destructuring Assignment
var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];

// Com um outro nível do array:
var [apple2, banana2, orange2, [tomato]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

// Com objetos:
var obj = {
    name: 'Leonardo'
}
var { name } = obj;

// Com objetos, mas atribuindo para uma variável name2:
var obj = {
    name: 'Leonardo'
}
var { name: name2 } = obj;
console.log(name2); // Leonardo

var { pessoa } = obj; // Aqui a variável recebe o parâmetro pelo índice.

// Com variáveis com nested
var obj = {
    name = 'Celso',
    props: {
        age: 26,
        favoriteColors: ['Yellow','Black','Blue']
    }
};
// Normalmente fazia-se assim:
var age = obj.props.age;
// Utilizando o destructuring, e atribuindo a uma nova variável age2:
var  {
    props: { age: age2}
} = obj;

// Outra coisa que podemos fazer é destructuring de arrays para objetos e objetos para arrays.
// Com array:
var {
    props: { age: age2, favoriteColors: [color1, color2]}
} = obj;
// Com objeto:
var { name: firstName } = obj; // Também da fazer nested, etc.

// O destructuring funciona com var, let ou const.
// Bem como com uma lista de argumentos de uma função:
// Exemplo com array:
function sum([a, b] = []){
    return a + b;
}
// Posso usar também com default values:
function sum([a, b] = [0, 0]){
    return a + b;
}
// Funciona também com objetos:
function sum({a, b}){
    return a + b;
}