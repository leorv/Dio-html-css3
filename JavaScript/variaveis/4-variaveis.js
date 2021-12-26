(() => {
    const test = 'valor função'
    console.log('Valor dentro da função: ', test);

    if (true) {
        const test = 'valor if';
        console.log('Valor dentro do if: ', test);
    }

    console.log('Valor após a execução do if: ', test);
})();

// A ideia dele é para criar constantes, mas quando atribuímos a um tipo primitivo, não
// permite que troque valor, mas quando é um objeto, permite, por exemplo com um array.
// Dentro dele podemos mudar o valor.

const name = 'Leonardo'; // Não podemos alterar o valor

const user = {
    name: 'Leonardo'
}

user.name = 'Thiago'; // Podemos alterar o valor

const persons = ['Leonardo', 'Vinícius', 'Rmulekinn'];

// Podemos adicionar
persons.push('Fnandy');

// Podemos remover
persons.shift();

// Alterar diretamente
persons[1] = 'João';