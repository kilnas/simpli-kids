import React from 'react';
import autoBind from 'auto-bind';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            cat: "cat"
        };

        autoBind(this);
    }

    render() {
        return(
            <div>
                <p> meow </p>
            </div>
        );
    }

}

export default HomePage;