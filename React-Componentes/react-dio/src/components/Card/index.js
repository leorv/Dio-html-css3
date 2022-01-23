import { useState } from "react";
import Button from "../Button";

const Card = () => {

    const [ valor, setValor] = useState(0);

    function Adicionar () {
        setValor(valor + 1);
    }

    function Remover () {
        setValor(valor - 1);
    }

    return (
        <div className="card">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Button
                className="btn btn-success"
                onClick={Adicionar}>
                    Adicionar
                </Button>
                <Button
                className="btn btn-danger"
                onClick={Remover}>
                    Remover
                </Button>
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;