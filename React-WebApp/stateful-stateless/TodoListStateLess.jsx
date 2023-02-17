// não possui gerenciamento de estados no componente
// construídos usando funções em JS

import React from "react";

const TodoListStateLess = ({items}) => {
    <div className="bloco-lista">
        <ul className="lista-estilizada">
            {items.map(item => <li> { item } </li>)}
        </ul>
    </div>
};

export default TodoListStateLess;