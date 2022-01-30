import React, { Component } from 'react';

class Twitter extends Component {

    state = {
        tweet: 'title'
    }

    componentDidMount() {
        const { posts, loading } = this.props;
        console.log('componentDidMount', posts);
        console.log('componentDidMount: loading', loading)
    }

    componentDidUpdate(prevProps){
        const { loading } = this.props;
        if (this.props.loading !== prevProps.loading) {
            console.log('componentDidupdate: loading', loading);
        }        
    }

    componentWillUnmount(){
        const posts = this.props;
        console.log('componentWillUnmount', posts);
    }

    shouldComponentUpdate(nextProps, nextState){
        // return this.state.tweet !== nextState.tweet || nextProps.loading !== this.props.loading;
        console.log('shouldComponentUpdate', nextState, nextProps);
        return true;        
    }

    render() {
        const posts = this.props;
        console.log('render', posts);

        return (
            <div>
                tests
            </div>
        );
    }
}

export default Twitter;