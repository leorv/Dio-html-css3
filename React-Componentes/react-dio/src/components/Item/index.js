const Item = (props) => {
    return (
        <a href="/" className="list-group-item list-group-item-action">
            {props.texto}
        </a>
    );
}

export default Item;