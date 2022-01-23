import './styles.css';

// Uma maneira de criar estilo
const divStyle = {
    color: blue;
    backgroundImage: 'url(' + imgUrl + ')'
};
function HelloWorldComponent() {
    return <div style={divStyle}>Hello World!</div>
}

// in line
// esse css é feito em camel case.
function App() {
    return (
        <HelloWorld style={{ marginTop: '10px' }} />
    )
}

// Usando de arquivo externo e classes
function HelloWorldCSS() {
    return <div className='div-style'>hello World!</div>
}

// styled components:
// npm install --save styled-components