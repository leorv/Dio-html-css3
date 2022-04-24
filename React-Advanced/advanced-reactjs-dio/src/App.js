import React, { Component } from 'react';
import Twitter from './Twitter';

class App extends Component {
    state = {
        loading: false,
        actived: true
    }

    onRemove = () => {
        this.setState({
            actived: false
        })
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                loading: true
            })
        }, 2000);
    }

    render() {
        const posts = [
            {
                title: 'GTA V',
                description: 'Trevor'
            },
            {
                title: 'Metal Gear Solid',
                description: 'Solid Snake'
            }
        ];

        return (
            <div>
                <button onClick={this.onRemove}>Remover componente</button>
                {this.state.actived && (
                    <Twitter posts={posts} loading={this.state.loading}></Twitter>
                )}
                
            </div>

        );
    }
}

export default App;