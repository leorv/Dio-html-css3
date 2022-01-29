# TDD e BDD

## O que é TDD?

Test-Driven Development

- Antecipar erros a nível de desenvolvimento
- Teste escrito antes da funcionalidade
- Não descarta a presença de um tester

Um ciclo:

1. Escrever um teste que falha.
2. Fazer o código funcionar.
3. Eliminar redundâncias, refatorar e desenvolver a lógica.

> red, green, refactor.

- Teste unitário
- Teste end-to-end (E2E).

**Bibliotecas**

- JEST
- React-testing-library
- Shallow
- Enzyme
- Chai
- Mocha
- Selenium
- Puppeteer (ferramenta que roda em cima do browser)

### Teste de função

```
// soma.js
function soma(a, b) {
    return a + b;
}
```

Para fazermos nosso teste em Jest, precisaremos do Jasmine.

Como ficaria então um teste da nossa função soma?

```
import { soma } from './soma';

describe('Testando a função soma', () => {
    it('A soma deve dar 3', () => {
        const res = soma(1,2);
        expect(res).toBe(3);
    })
})
```

E para testar componentes? Afinal estamos usando React...

### Teste de componente

Vamos usar a react-testing-library

```
yarn add --dev @testing-library/react

# para extensões de comparação no jest
yarn add --dev @testing-library/jest-dom/extend-expect
```

Vamos tomar como base um componente chamado Basic.

```
import React from 'react';

const Basic = (props) => (
    <p>Meu nome é {props.name}</p>
)

export default Basic;
```

Como testamos ele?

```
import React from 'react';
import Basic from './Basic';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Testando Basic', () => {
    it('O componente Basic deve renderizar corretamente', () => {
        const { baseElement } = render(<Basic name="Leonardo" />);
        expect(baseElement).toHaveTextContent('Meu nome é Leonardo');
    });
});
```

E um componente que está conectado a um Redux?

```
import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    state = { count: 0 }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span data-testid="count-value">{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);
```

Temos que criar um Store de teste, um provider de teste. E fazer um wrapper para testar esse componente.

Se tivesse um context, teríamos que criar um context, se tivesse um router, teríamos que criar um router também.

```
import React from 'react';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { initialState, counterReducer } from '../../../../redux/reducers/counter';

function renderWithRedux(
    ui,
    { initialState, store = createStore(counterReduce, initialState) } = {}
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store
    }
}

describe('Testando Counter', () => {
    it('O componente counter deve renderizar corretamente', () => {
        const { getByTestId, getByText } = renderWithRedux(<Counter />);
        fireEvent.click(getByText('+'));
        expect(getByTestId('count-value').textContent).toBe('1');
    });
});
```

## O que é BDD?

- Behavior-Driven Development
- Teste de especificação
- Une especificação, teste automatizado e premissa de teste (documento de teste)

### Sintaxe Gherkin

- Sintaxe de steps para definir cenários
- Descreve cada funcionalidade por feature (caso de uso)

Exemplo:

```
# language: pt-br

Funcionalidade: Login
    Texto com a descrição da funcionalidade

Cenário: Como um usuário válido, posso logar no sistema.
    Dado que estou na tela de login
    Quando digitar credenciais válidas
    E clicar no botão de login
    Então devo acessar a Home do sistema

Cenário: Como um usuário inválido, devo visualizar uma mensagem de erro e continuar na tela de login.
    Dado que estou na tela de login
    Quando digitar credenciais inválidas
    E clicar no botão login
    Então devo ver uma mensagem de erro
    E devo estar na tela de login
```

Como fazer isso com o React? Tem duas bibliotecas hoje que são mais fáceis de trabalhar:

- Jest-cucumber
- Chai

```
yarn add --dev jest-cucumber
```

No arquivo soma.feature:

```
Feature: Somar um par
    soma um par de números

    Scenario: soma 1 + 2 resulta em 3
        Given 1
        When soma 2
        Then a soma é 3
```

```
// soma.test.js

import { soma } (alias) loadFeature(featureFilePath: string, options?: Options): ParsedFeature;
import { defineFeature, loadFeature } from 'jest-cucumber';
const feature = loadFeature('./src/aula-4/parte-1/components/soma/soma.feature');

describe('testando função soma', () => {
    it('A soma deve dar 3', () => {
        const res = soma(1, 2);
        expect(res).toBe(3);
    });
});

defineFeature(feature, test => {
    test('Soma 1 + 2 resulta em 3', ({ given, when, then}) => {
        let x;
        let z;

        given('1', () => {
            x = 1;
        });

        when('soma 2', () => {
            z = soma(x, 2);
        });

        then('a soma é 3', () => {
            expect(z).toBe(3);
        });
    });
});
```

## Debbuging

> Depuração é o processo de encontrar e reduzir defeitos em um software.

Ferramentas:

- Chrome Devtools
- Redux Devtools
- React Devtools
- Audits

## Tratamento de erros

- Resiliência de SW
- Segurança

### Tratamento em funções

```
export const soma = (a, b) => a + b;
```
A função acima não possui nenhum tipo de tratamento.

Uma das formas de fazer isso seria:

```
export const somaSegura = (a, b) => {
    if (typeOf a === number && typeOf b === number) {
        return a + b;
    } else {
        // vamos convencionar -1 quando a soma for inválida.
        return -1;
    }
}
```

### Tratamento em forms

```
<form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
    <label>
        Nome:
        <input type="text" value={this.state.value} onChange={this.handleChange} required />
    </label>
    <input type="submit" value="submit" />
</form>
```

### Tratamento de retorno em APIs

```
export const fetchCientistas = () => {
    fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
        .then(response => response.json())
        .then(data => {
            setCientistas(data);
        })
        .catch(error => {
            exibirMensagem(error.code);
        });
}
```

```
function exibirMensagem(codigo) {
    if(codigo == 401) {
        alert('Faça login para continuar.');
    }
    if(codigo == 404) {
        alert('Recurso não encontrado.');
    }
    if(codigo == 500) {
        alert('Erro interno do servidor.');
    }
}
```

### Tratamento de erros em componentes

- Em JS usamos PropTypes.
- Podemos usar linguagens tipadas como TypeScript, definindo interfaces.

```
import React from 'react';
import PropTypes from 'prop-types';

export const Basic = ({ name }) => {
    <p>Meu nome é { name }</p>
}

Basic.propTypes = {
    name: PropTypes.string
}
```