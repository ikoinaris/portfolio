import React, { Component } from 'react';
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";


class App extends Component{
    state = { displayBio: false };

    toogleDisplayBio = () => {
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
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;