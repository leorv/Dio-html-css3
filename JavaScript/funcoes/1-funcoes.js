function getName() {
    return 'Leonardo Ruoso Vendramini';
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

const obj = {
    logFn: logFn
}

logFnResult(getName);