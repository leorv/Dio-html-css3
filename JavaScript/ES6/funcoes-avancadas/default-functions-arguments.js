function multiply(a, b){
    return a * b;
}
console.log(multiply(5, 5)); // 25

// E se esquecêssemos de passar um parâmetro?
console.log(multiply(5)); // irá retornar um NaN (not a number)
// Quando não passamos um parâmetro para a função, na verdade o valor dele é undefined.

// Uma solução que faziam, seria:
function multiply(a, b){
    b = b || 1;

    return a * b;
}
// Mas e se tentássemos multiplicar por 0?
console.log(5, 0); // retornaria 5, o que não é o que queremos.
// o 0 seria convertido para false, daí retornaria o 1.

// Poderíamos então recorrer a validação de tipo
function multiply(a, b){
    b = typeof b === 'undefined' ? 1 : b;

    return a * b;
}
// Com isso acima, o comportamento seria como esperado.
// Poderíamos ter feito com um if também.
function multiply(a, b){
    if (typeof b === 'undefined'){
        b = 1;
    }

    return a * b;
}
// Porém, era verboso e continua verboso.

// No ECMA6 podemos atribuir valores padrão sem utilizar toda aquela validação.
function multiply(a, b = 1){
    return a * b;
}
// Podemos fazer isso na verdade para todos os parâmetros.

// Podemos referenciar também os parêmtros
function multiply(a, b = a){
    return a * b;
}
// Atenção, aqui a ordem é importante, não pode referenciar um valor que viria depois na lista de argumentos.

// Lazy evaluation
function randomNumber(){
    return Math.random() * 10;
}
function multiply(a, b = randomNumber()){ // Posso passar uma função.
    return a * b;
}
