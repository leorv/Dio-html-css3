import React, { useEffect, useState ,memo } from 'react';

// Não use hooks dentro de funções JS comuns, em vez disso, você pode:
// - Chamar hooks em componentes React.
// - Chamar hooks dentro de hooks customizados.
// Seguindo essas regras, você garante que toda lógica de estado (state)
// no componente seja claramente visível no código fonte.

// Evitar re-render, caso desnecessário.
const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading;
}

function Twitter(props) {

    const { loading } = props;
    const [ tweet, setTweet ] = useState('title');

    useEffect(() => {
        console.log("componentDidMount");
    }, []);

    useEffect(() => {
        console.log("componentDidUpdate");
    }, [loading]);

    useEffect(() => {
        // O return dentro do useEffect representa o componentWillUnmount
        return () => {
            console.log("compoenentWillUnmount");
        }
    }, []);

    const handleTweet = () => {
        setTweet('Tweet atualizado');
    }

    console.log('Tweet atualizado', tweet);

    return (
        <div>
            <button onClick={handleTweet}>Re-render</button>
            tests
        </div>
    );

}

export default memo(Twitter, areEqual);