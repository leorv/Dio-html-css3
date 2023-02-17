// Identificando erros.
// Podemos usar blocos de try catch

try {
    console.log(name);
    const name = 'Leonardo Ruoso Vendramini';

} catch (err) {
    console.log('Error: ', err);
}
console.log('Keep going...');

// Podemos também criar nosso erro, já que ele é uma classe.
try {
    const name = 'Leonardo';

    const myError = new Error('Custom message');
    throw myError;

} catch(err){
    console.log('Error: ', err);
}
finally {
    console.log('Keep going...');
}

// Posso também criar minha classe customizada
class CustomError extends Error {
    constructor({message, data}){
        super(message);
        this.data = data;
    }
}
try {
    const name = 'Leonardo';

    const myError = new CustomError({
        message: 'Custom message',
        data: {
            type: 'Server error'
        }
    })
    throw myError;

} catch(err){
    console.log('Error: ', err);
}
finally {
    console.log('Keep going...');
}