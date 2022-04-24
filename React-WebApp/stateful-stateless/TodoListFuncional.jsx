import React, { useState } from "react";

const TodoListFuncional = () => {
    const [items, setItems] = useState([
        'Tomate',
        'Alface',
        'Melancia'
    ]);

    const addItem = (item) => {
        setItems([...items, item]);
    }

    const removeItem = () => {
        setItems([...items.slice(1)]);
    }

    return (
        <div className="bloco-lista">
            <p>Minha lista</p>
            <ul className="lista-estilizada">
                {items.map(item => <li>{item}</li>)}
            </ul>
            <button onClick={ () => { addItem('Abóbora') } }>Adicionar item</button>
            <button onClick={ () => { removeItem() } }>Remover item</button>
        </div>
    )
}