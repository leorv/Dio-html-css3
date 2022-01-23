const Item = (props) => {
    return (
        <a href="/" className="list-group-item list-group-item-action">
            {props.children}
        </a>
    );
}

export default Item;