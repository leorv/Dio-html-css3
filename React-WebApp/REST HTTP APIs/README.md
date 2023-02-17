# APIs REST

Servem para conectar a um ou mais servidores HTTP

- GET
- POST
- DELETE
- PUT

- **Fetch API**

- **Axios**

## Fetch API

- Nativa do browser
- Oferece uma alternativa ao XMLHttpRequest() e jQuery.ajax()
- Suporte a Service Workers

### Algumas diferenças

Em relação ao XMLHttpRequest() e jQuery.ajax():

- Não envia nem recebe cookies (precisa definir a opção credenciais)
- não rejeita o status do erro HTTP

## APIs Mocka gratuita

beeceptor.com

## Axios

- Lib de HTTP API
- Cross-browser
- Pode monitorar o progresso de um request
- Melhor tratamento de erros
- Melhor teste

instalação: yarn add axios

## Imutabilidade e Redux

- Uma vez criada, uma coleção não pode ser alterada.
- Novas coleções podem ser criadas a partir de uma coleção anterior e uma mutação (setter) como um conjunto.
- Novas coleções são criadas usando o máximo possível da estrutura original, reduzindo a cópia e aumentando a performance.

### Benefícios

- Performance
- Programação mais simples
- Debugging mais simples (detecção de mudanças)

Se você quer performance em React, use dados imutáveis.

Você consegue usando o shouldComponentUpdate ou React.PureComponent.

### Problema

- O PureComponent vai fazer uma comparação rasa entre os valores antigos e novos de this.props.words, por exemplo.
- O código muda words no handleClick do WorkAdder mas, mesmo mudando as palavras, elas serão consideradas como iguais.

#### Solução 1

Evitar mudar valores ou estado.

Abaixo cria-se na verdade uma cópia, é uma estrutura nova.

```
handleClick() {
    this.setState(state => ({
        words: [...state.words, 'marklar'],
    }));
};
```

#### Solução 2 - Imutable.js

Outra forma seria utilizar uma biblioteca que fornece coleções persistentes e imutáveis.
Permite a detecção barata de alterações nos objetos.

Considere o problema:

```
cosnt x = { foo: 'bar'};
const y = x;

y.foo = 'baz';
x === y; // true
```

O trecho poderia ser reescrito, como solução:

```
const SomeRecord = Immutable.Record({ foo: null });
const x = new SomeRecord({ foo: 'bar' });

const y = x.set('foo', 'baz');
const z = x.set('foo', 'bar');

x === y; // false
x === z; // true
```

Outras libs:
- Immer
- Immutability-helper
- Seamless-immutable

### Imutabilidade é um Pré Requisito no Redux

- Redux e React utilizam comparações rasas.
- Manipulações de dados mais segura
- Time-travel debbuging

Os reducers dividem o objeto de estados em domínios por uma chave;
combineReducers checa mudanças usando comparações rasas.

1. Fazem a interação nos reducers
2. Criam um novo objeto de estados a partir dos estados retornados por cada reducer

- connect gera componentes que fazem comparações rasas com o estado root
- Retornam o valor para a função masStateToProps, verificando aqueles que precisam de uma operação de re-render

Por que não funciona com objetos mutáveis?

```
// State referenciado na store do Redux
const State = {
    user: {
        contadorAcessos = 0,
        nome: 'matheus'
    }
}

// Função seletora
const getUser = state => {
    ++state.user.contadorAcessos; // mudando o estado
    return state;
}

// mapStateToProps
const mapStateToProps = state => ({
    // O objeto retornado de getUser() é sempre
    // o mesmo objeto, então esse componente referenciado
    // nunca irá sofrer re-render, mesmo depois de alterado.
    useRecord: getUser(state);
})

const a = mapStateToProps(state);
const b = mapStateToProps(state);

a.userRecord === b.userRecord // true
```


## Redux + REST

Suponha um sistema de notificações ou um sistema de logging.
Você precisa manter a sincronia, independente da tela onde estiver.
Uma maneira de resolver fácil seria armazenar os dados do serviço no Redux.

#### Para fazer isso precisaremos de uma camada a mais.

### Redux Middlewares

Provê uma camada entre o disparo de uma ação e o momento que ela atinge o reducer.
Utilizados para uma variedade de funções, entre elas chamadas de APIs de serviço.

- Imagine um sistema de log, onde toda action disparada em um sistema é impressa com o log na tela.

### Tentativa 1 - Logging manual

```
store.dispatch(addTodo('Use Redux'));
```

```
const action = addTodo('Use Redux');

console.log('dispatching', action);
store.dispatch(action);
console.log('next state', store.getState());
```

### Tentativa 1 - Encapsulando o dispatch

```
function dispatchAndLog(store, action) {
    console.log('dispatching', action);
    store.dispatch(action);
    console.log('next state', store.getState());
}
```

```
dispatchAndLog(store, addTodo('Use Redux'));
```

### Tentativa 3 - "Gambiarra" para substituir o dispatch

```
const next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}
```

Ok, substitui o dispatch. Mas, e se eu quisesse fazer outra coisa, como um crash report usando a mesma estrutura?

Poderíamos usar as duas funções como módulos separados como abaixo, mas ainda assim, não tá legal isso.

```
function patchStoreToAddLogging(store) {
    const next = store.dispatch;
    store.dispatch = function dispatchAndLog(action) {
        console.log('dispatching', action);
        let result = next(action);
    }
}

function patchStoreToAddCrashReporting(store) {
    const next = store.dispatch;
    store.dispatch = function dispatchAndReportErrors(action) {
        try {
            return next(action);
        }
        catch (err) {
            console.error('Caught an exception!', err);
            Raven.captureException(err, {
                extra: {
                    action,
                    state: store.getState()
                }
            })
            throw err;
        }
    }
}
```

```
patchStoreToAddLogging(store);
patchStoreToAddCrashReporting(store);
```

### Tentativa 4 - Escondendo a "Gambiarra"

```
function logger(store) {
    const next = store.dispatch

    // Previously:
    // store.dispatch = function dispatchAndLog(action) {;

    return function dispatchAndLog(action) {
        console.log('dispatching', action);
        let result = next(action);
        console.log('next state', store.getState());
        return result;
        }
    }
}
```

```
function applyMiddlewareByMonkeypatching(store, middlewares) {
    middlewares = middlewares.slice();
    middlewares.reverse();

    // transform dispatch function with each middleware.
    middlewares.forEach(middleware => (store.dispatch = middleware(store)));
}
```

```
applyMiddlewareByMonkeypatching(store, [loger, crashReporter]);
```

O fato da ideia acima esconder a gambiarra, não tira o fato de que é uma gambiarra.

### Tentativa 5 - Removendo a Gambiarra

```
function logger(store) {
    return function wrapDispatchToAddLogging(next) {
        return function dispatchAndLog(action) {
            console.log('dispatching', action);
            let result = next(action);
            console.log('next state', store.getState());
            return result;
        }
    }
}
```

Vamos criar uma estrutura melhor, e a estrutura abaixo é exatamente como os middlewares de redux funcionam.

```
const logger = store => next => action {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}
```

```
const crashReporter = store => next => action => {
    try {
        return next(action);
    }
    catch (err) {
        console.error('Caught an exception!', err);
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        })
        throw err;
    }
}
```

### Tentativa 6 - Aplicando o Middleware na mão

```
// Aviso: implementação naïve!
// Esta *não* é a Redux API.

function applyMiddleware(store, middlewares) {
    middleware = middlewares.slice();
    middleware.reverse();
    let dispatch = store.dispatch;

    middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)));
    return Object.assign({}, store, { dispatch });
}
```

3 diferenças do applyMiddleware() do Redux:

- Só expõe um subconjunto da Store API para o middleware: dispatch e getState()
- Fica difícil saber se store.dispatch(action) vai realmente percorrer a cadeia do middleware de novo.
- Opera em cima de createStore() ao invés da store em si

**Aplicando o middleware**

```
import { createStore, combineReducers, applyMiddleware } from 'redux';

const todoApp = combineReducers(reducers);
const store = createStore(
    todoApp,
    // applyMiddleware() diz a createStore() como fazer o handling do middleware.
    applyMiddleware(logger, crashReporter);
)
```

Criamos nossos próprios middlewares, mas se quiser pode usar alguns que já existem, como:

- redux-thunk
- redux-saga

## Redux Thunk

Um thunk é uma função que chama outra função.

```
function some_function() {
    // faça algo aqui.
    return function thunk() {
        // faça algo pensado depois.
    }
}
```

***instalação***

```
yarn add redux-thunk
```