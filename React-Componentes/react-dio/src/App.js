import Item from "../src/components/Item";


const App = () => {
    return (
        <>
            <h1>Hello World!</h1>
            <ul>
                <Item>
                    Item 1
                </Item>
                <Item>
                    Item 2
                </Item>
                <Item>
                    Item 3
                </Item>
            </ul>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    )
}

export default App;