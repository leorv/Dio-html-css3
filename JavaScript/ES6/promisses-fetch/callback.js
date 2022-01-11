// Nativamente no Javascript, se fazia:
function doSomething(callback) {
    setTimeout(function () {
        // did something
        callback('First data');
    }, 1000);
};

function doOtherThing(callback) {
    setTimeout(function () {
        // did other thing
        callback('Second data');
    }, 1000);
};

// Digamos que eu precise executar elas de maneira sequencial, pois eu preciso dos dados de uma e depois dos dados de outra.

function doAll() {
    doSomething(function (data) {
        var processedData = data.split('');

        doOtherThing(function (data2) {
            var processedData2 = data2.split('');

            setTimeout(function () {
                console.log(processedData, processedData2);
            }, 1000);

        })
    })
}
doAll();

// Aparentemente tudo certo, mas pra tratar os erros de cada etapa, a coisa fica complicada.
// Fica um código embolado.
function doAll() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');
            try {
                doOtherThing(function (data2) {
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (err) {
                        // handle error
                    }
                })
            } catch (err) {
                // handle error
            }
        })
    } catch (err) {
        // handle error
    }
}
doAll();

// Podemos resolver isso com promisses.
const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First data');
    }, 1000);
})

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second data');
    }, 1000);
})

console.log(doSomethingPromise); // pending
// Uma promise pode ter 3 estados:
// Pending
// Fullfilled
// Rejected

// Para que ela execute de forma correta, e tratar os erros:
doSomethingPromise
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Posso encadear um then no outro, uma promise depois da outra.
doSomethingPromise
    .then(data => {
        console.log(data);
        return doOtherThingPromise
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log(error));

// Caso eu quiser fazer uma função que gere essa promise:
// Assim será executado no tempo esperado.
const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First data');
    }, 1000);
})

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second data');
    }, 1000);
})

// As promises executam de maneira sequencial.
// Caso queiramos que elas executem de forma paralela:
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(
    (data) => {
        console.log(data);
    }
).catch(err => {
    console.log('something went wrong', err);
})

// E se quisermos executar a que resolver primeiro:
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(
    (data) => {
        console.log(data);
    }
).catch(err => {
    console.log('something went wrong', err);
})