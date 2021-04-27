import React, { Component } from 'react';


class App extends Component{
    constructor() {
        super();
        this.state = { displayBio: false };

        //binding method to constructor
        this.toogleDisplayBio = this.toogleDisplayBio.bind(this);
    }

    toogleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <h1>Hello !</h1>
                <p>My name is Yannis</p>
                <p>I am an IT consultant</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Munich and code every day.</p>
                            <p>My favorite language is Java and I think React.js is awesome.</p>
                            <p>Besides coding, I also love movies and music.</p>
                            <div>
                                <button onClick={ this.toogleDisplayBio }>Show less</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <button onClick={ this.toogleDisplayBio }>Read more</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default App;