import React, { Component } from "react";

const TITLES = [
    'a software engineer',
    'a basketball fan',
    'a book lover',
    'a passionate traveler'
]

class Title extends Component {
    state = { titleIndex: 0 };
    componentDidMount() {
        console.log('Title Component has mounted');
        this.animateTitles();
    }

    animateTitles() {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex: titleIndex});
        }, 4000);
    }

    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <div>
                <p>I am {title}</p>
            </div>
        )
    }
}

export default Title;